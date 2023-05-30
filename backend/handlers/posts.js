import { db } from '../firebase.js'
import { v4 as uuid } from 'uuid'
import { adminStorage } from '../fbadmin.js'
import firebase from 'firebase'
const getJOBS = (req, res) => {
  db.collection('jobs')
    .orderBy('createdAt', 'desc')
    .get()
    .then((docs) => {
      let jobs = []
      docs.forEach((doc) => {
        jobs.push({
          jobID: doc.id,
          title: doc.data().title,
          category: doc.data().category,
          description: doc.data().description,
          price: doc.data().price,
          duration: doc.data().duration,
          createdAt: doc.data().createdAt,
          owner: doc.data().owner,
          proposalsCount: doc.data().proposalsCount,
        })
      })
      return res.json(jobs)
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).json({ error: error })
    })
}

const postJOB = (req, res) => {
  const newJOB = {
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    duration: req.body.duration,
    createdAt: new Date().toISOString(),
    owner: req.user.username,
    proposalsCount: 0,
  }
  db.collection('jobs')
    .add(newJOB)
    .then((doc) => {
      const resJOB = newJOB
      resJOB.jobID = doc.id
      return res.json(resJOB)
    })
}

const uploadProposal = (req, res) => {
  const bucket = adminStorage.bucket()
  let token = uuid()
  let file = req.file
  const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file selected')
      } else {
      }
      let newFileName = `${file.originalname}`

      let fileUpload = bucket.file(newFileName)
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          metadata: {
            contentType: file.mimeType,
            cacheControl: 'public',
            firebaseStorageDownloadTokens: token,
          },
          public: true,
        },
      })

      blobStream.on('error', (error) => {
        reject('Something is wrong! Unable to upload at the moment.')
      })

      blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${newFileName}?alt=media&token=${token}`
        resolve(url)
        const proposal = {
          username: req.user.username,
          file: url,

          createdAt: new Date().toISOString(),
          jobID: req.params.jobID,
        }
        db.collection('proposals')
          .add(proposal)
          .catch((error) => {
            console.log(error)
            return res.status(500).json({ error: error })
          })
      })

      blobStream.end(file.buffer)
    })
  }
  if (file) {
    uploadImageToStorage(file)
      .then((success) => {
        res.status(200).send({
          status: 'proposal Uploaded successfully',
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

const getProposal = (req, res) => {
  let proposalData = []

  db.collection('proposals')
    .where('jobID', '==', req.params.id)
    .get()
    .then((data) => {
      data.forEach((doc) => {
        if (doc.exists) {
          proposalData.push(doc.data())
        }
      })
      return res.json(proposalData)
    })
}

const deleteJob = (req, res) => {
  db.doc(`/jobs/${req.params.jobID}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(400).json({ error: 'job not found' })
      } else {
        if (req.user.username !== doc.data().owner) {
          return res.status(403).json({ error: 'unAuthorized' })
        } else {
          doc.ref.delete()
        }
      }
      return res.status(200).json({ message: 'deleted succesfully' })
    })
}

const getJOBSbyCategory = (req, res) => {
  const jobs = []
  db.collection('jobs')
    .where('category', '==', req.params.category)
    .get()
    .then((data) => {
      data.forEach((doc) => {
        jobs.push(doc.data())
      })
      return res.status(200).json(jobs)
    })
    .catch((err) => {
      console.log(err)
      return res.json({ error: err })
    })
}

const sendMessage = (req, res) => {
  const messageData = {
    body: req.body.body,
    client: req.body.client,
    freelancer: req.body.freelancer,
    createdAt: new Date().toISOString(),
    sender: req.user.username,
  }
  db.collection('messages')
    .add(messageData)
    .then((doc) => {
      db.doc(`/users/${req.user.username}`)
        .update({
          inbox: firebase.firestore.FieldValue.arrayUnion(
            messageData.freelancer,
          ),
        })
        .then((doc) => {
          db.doc(`/users/${messageData.freelancer}`).update({
            inbox: firebase.firestore.FieldValue.arrayUnion(messageData.client),
          })
        })
      res.json(messageData)
    })
    .catch((err) => {
      res.status(500).send({ error: err })
    })
}

const getAllInbox = (req, res) => {
  const InboxData = []
  db.doc(`/users/${req.user.username}`)
    .get()
    .then((doc) => {
      db.collection('users')
        .where('username', 'in', doc.data().inbox)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            InboxData.push(doc.data())
          })
          return res.json(InboxData)
        })
    })
}

const getMessages = (req, res) => {
  const messagesData = []
  db.collection('messages')
    .where('client', '==', req.user.username)
    .where('freelancer', '==', req.params.username)
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      data.forEach((doc) => {
        messagesData.push(doc.data())
      })
      return res.json(messagesData)
    })
}

const getMessagesF = (req, res) => {
  const messagesData = []
  db.collection('messages')
    .where('client', '==', req.params.username)
    .where('freelancer', '==', req.user.username)
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      data.forEach((doc) => {
        messagesData.push(doc.data())
      })
      return res.json(messagesData)
    })
}

export {
  postJOB,
  getJOBS,
  uploadProposal,
  getProposal,
  deleteJob,
  getJOBSbyCategory,
  sendMessage,
  getAllInbox,
  getMessages,
  getMessagesF,
}

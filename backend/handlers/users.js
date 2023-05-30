import { adminStorage } from '../fbadmin.js'
import { db } from '../firebase.js'
import { auth } from '../firebase.js'
import {
  validatersSignUPData,
  validatersLoginData,
} from '../utils/validaters.js'
import { v4 as uuid } from 'uuid'

const signUp = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    name: req.body.name,
    username: req.body.username,
    phoneNo: req.body.phoneNo,
    type: req.body.type,
    // link: '',
  }
  const { valid, errors } = validatersSignUPData(newUser)

  if (!valid) return res.status(400).json(errors)
  const token = {}
  let userId
  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res
          .status(400)
          .json({ username: 'This username is already taken' })
      } else {
        return auth.createUserWithEmailAndPassword(
          newUser.email,
          newUser.password,
        )
      }
    })
    .then((data) => {
      token.user = data.user
      userId = data.user.uid
      return data.user.getIdToken()
    })
    .then((idToken) => {
      token.token = idToken
      const userCredentials = {
        name: newUser.name,
        username: newUser.username,
        type: newUser.type,
        email: newUser.email,
        phoneNo: newUser.phoneNo,
        createdAt: new Date().toISOString(),
        //TODO Append token to imageUrl. Work around just add token from image in storage.
        imageUrl:
          ' https://firebasestorage.googleapis.com/v0/b/ethiosocialnetwork.appspot.com/o/no-img.png?alt=media&token=1fada226-aeec-49c1-ada3-aaad03d3be49',
        userId,
      }
      return db.doc(`/users/${newUser.username}`).set(userCredentials)
    })

    .then(() => {
      return res.status(201).json(token)
    })
    .catch((err) => {
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ email: 'Email is already in use' })
      }
      if (err.code === 'auth/weak-password') {
        return res.status(400).json({ password: 'weak Password' })
      }
    })
}

const login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  }

  const { valid, errors } = validatersLoginData(user)
  if (!valid) return res.status(400).json(errors)

  let userData = {}

  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      data.user.getIdToken().then((token) => {
        userData.token = token
      })
      db.collection('users')
        .where('email', '==', user.email)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            userData.user = doc.data()
          })
          return res.json(userData)
        })
    })
    .catch((err) => {
      return res.status(403).json({ general: 'wrong credentials' })
    })
}

const updateProfile = (req, res) => {
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

        db.collection('users')
          .where('username', '==', req.user.username)
          .get()
          .then((data) => {
            data.forEach((doc) => {
              doc.ref.update({
                imageUrl: url,
              })
            })
          })
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

const addResume = (req, res) => {
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

        db.collection('users')
          .where('username', '==', req.user.username)
          .get()
          .then((data) => {
            data.forEach((doc) => {
              doc.ref.update({ resume: url })
            })
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

const getMe = (req, res) => {
  let userData = {}
  db.doc(`users/${req.user.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData.userCredentials = doc.data()
        return db
          .collection('jobs')
          .where('owner', '==', req.user.username)
          .get()
      }
    })
    .then((data) => {
      userData.jobs = []
      data.forEach((doc) => {
        userData.jobs.push({
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
      return res.json(userData)
    })
    .catch((err) => {
      console.log(err)
      return res.status(500).json({ error: err })
    })
}

const getUser = (req, res) => {
  let userData = {}
  db.doc(`/users/${req.params.name}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        userData = doc.data()
      }
      return res.json(userData)
    })
}

export { signUp, login, updateProfile, addResume, getMe, getUser }

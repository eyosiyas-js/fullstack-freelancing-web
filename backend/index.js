import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {
  addResume,
  getMe,
  getUser,
  login,
  signUp,
  updateProfile,
} from './handlers/users.js'
import FBauth from './utils/TokenVerify.js'
import {
  deleteJob,
  getJOBS,
  getJOBSbyCategory,
  getProposal,
  postJOB,
  sendMessage,
  uploadProposal,
  getAllInbox,
  getMessages,
  getMessagesF,
} from './handlers/posts.js'
import multer from 'multer'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const Multer = multer({ Storage: multer.memoryStorage() })
const port = process.env.PORT || 5000
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/user/me', FBauth, getMe)
app.get('/job/:id', FBauth, getProposal)
app.post('/user/update', FBauth, Multer.single('file'), updateProfile)
app.post('/user/resume', FBauth, Multer.single('file'), addResume)
app.post(
  '/job/:jobID/uploadproposal',
  FBauth,
  Multer.single('file'),
  uploadProposal,
)
app.get('/jobs/all', getJOBS)
app.get('/jobs/:category', getJOBSbyCategory)
app.post('/post', FBauth, postJOB)
app.post('/signup', signUp)
app.post('/login', login)
app.get('/user/:name', FBauth, getUser)
app.delete('/job/:jobID/delete', FBauth, deleteJob)
app.post('/message/:freelancer', FBauth, sendMessage)
app.get('/inbox', FBauth, getAllInbox)
app.get('/inbox/c/:username', FBauth, getMessages)
app.get('/inbox/f/:username', FBauth, getMessagesF)

app.listen(port, () => console.log(`listening on port ${port}`))

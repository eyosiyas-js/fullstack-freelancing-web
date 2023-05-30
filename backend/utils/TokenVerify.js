import { adminAuth } from '../fbadmin.js'
import { db } from '../firebase.js'

const FBauth = (req, res, next) => {
  let idToken
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    console.error('no token found')
    return res.status(403).json({ error: 'unauthorized' })
  }
  adminAuth
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log(decodedToken)
      req.user = decodedToken
      return db
        .collection('users')
        .where('userId', '==', req.user.uid)
        .get()
        .then((data) => {
          req.user.username = data.docs[0].data().username
          return next()
        })
    })
    .catch((error) => {
      console.error('error while verifying the Token', error)
      return res.status(403).json(error)
    })
}

export default FBauth

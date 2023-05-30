import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC2FjQ-lbfImuUTwM8-uhP3J0V-CCHyGgo",
  authDomain: "ethio-freelancer.firebaseapp.com",
  projectId: "ethio-freelancer",
  storageBucket: "ethio-freelancer.appspot.com",
  messagingSenderId: "919507630755",
  appId: "1:919507630755:web:af5fba4e58467829361d16",
  measurementId: "G-7542J4C8SX"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()

export { auth,db }

const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBr5QhezWDQXaMQ42u3qCT3deTNomsk4xE",
    authDomain: "kiei-451-243e6.firebaseapp.com",
    projectId: "kiei-451-243e6",
    storageBucket: "kiei-451-243e6.appspot.com",
    messagingSenderId: "567927564528",
    appId: "1:567927564528:web:436d112c206534951a7a35"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
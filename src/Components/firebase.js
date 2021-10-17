import firebase from 'firebase'
const firebaseConfig= {
  apiKey: "AIzaSyAB7ZdtLidS2ZWYV44lrp4M3bapZCrHAbc",
  authDomain: "quiz-app-prac.firebaseapp.com",
  projectId: "quiz-app-prac",
  storageBucket: "quiz-app-prac.appspot.com",
  messagingSenderId: "629548735132",
  appId: "1:629548735132:web:eab25600619635e095ab59"
};
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();
export default db;
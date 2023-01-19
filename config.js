import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBmLF_8oqIIXVTyDT1N-7A_sEUKZ-aJMco",
    authDomain: "listas-21cc9.firebaseapp.com",
    projectId: "listas-21cc9",
    storageBucket: "listas-21cc9.appspot.com",
    messagingSenderId: "486003505861",
    appId: "1:486003505861:web:ae303d2acf92c8dcd04eac"
  };
firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database 
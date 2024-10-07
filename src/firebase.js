import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiWqacz9DKUezS0ZTBpF3BjQckbip7S64",
    authDomain: "drive-2c9e4.firebaseapp.com",
    projectId: "drive-2c9e4",
    storageBucket: "drive-2c9e4.appspot.com",
    messagingSenderId: "453240738623",
    appId: "1:453240738623:web:5baaa73b690fadc9ebb98a"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider}
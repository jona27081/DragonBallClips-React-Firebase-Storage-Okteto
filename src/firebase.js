import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASlX55n6n9-eHnaLldrM2pUcgH8bUydoY",
  authDomain: "dragonballclips.firebaseapp.com",
  projectId: "dragonballclips",
  storageBucket: "dragonballclips.appspot.com",
  messagingSenderId: "585801974428",
  appId: "1:585801974428:web:81707500243770ec27a359"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}
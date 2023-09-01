// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbJDZqPBCXFzejDxo9pLqdf-licftFUWc",
  authDomain: "sneaker-ae167.firebaseapp.com",
  projectId: "sneaker-ae167",
  storageBucket: "sneaker-ae167.appspot.com",
  messagingSenderId: "673100696199",
  appId: "1:673100696199:web:a9bd4c85d006a02d130622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

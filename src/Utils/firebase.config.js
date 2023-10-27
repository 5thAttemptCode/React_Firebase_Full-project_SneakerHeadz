
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDbJDZqPBCXFzejDxo9pLqdf-licftFUWc",
  authDomain: "sneaker-ae167.firebaseapp.com",
  projectId: "sneaker-ae167",
  storageBucket: "sneaker-ae167.appspot.com",
  messagingSenderId: "673100696199",
  appId: "1:673100696199:web:a9bd4c85d006a02d130622"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
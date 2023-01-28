
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBw2FmBYdJ2BZcsrhEAdPbEAwHhjj1_zTY",
  authDomain: "next-auth-curd-5b497.firebaseapp.com",
  projectId: "next-auth-curd-5b497",
  storageBucket: "next-auth-curd-5b497.appspot.com",
  messagingSenderId: "631823476260",
  appId: "1:631823476260:web:4a0a55b363734c9f87dab1"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
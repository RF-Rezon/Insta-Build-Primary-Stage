// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

require('dotenv').config();
const firebaseConfig = {
  apiKey:process.env.APIKEY,
  authDomain:process.env.AUTHDOMAIN,
  projectId:process.env.PROJECTID,
  storageBucket:process.env.STORAGEBUCKET,
  messagingSenderId:process.env.MESSAGINGSENDERID,
  appId:process.env.APPID,
};

  // apiKey:process.env.APIKEY,
  // authDomain:process.env.AUTHDOMAIN,
  // projectId:process.env.PROJECTID,
  // storageBucket:process.env.STORAGEBUCKET,
  // messagingSenderId:process.env.MESSAGINGSENDERID,
  // appId:process.env.APPID,

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };


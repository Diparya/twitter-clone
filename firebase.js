// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9AlDCi8GFudMRpLhTeKcJRbhn9aDZqxI",
  authDomain: "twitter-clone-95242.firebaseapp.com",
  projectId: "twitter-clone-95242",
  storageBucket: "twitter-clone-95242.appspot.com",
  messagingSenderId: "48041527967",
  appId: "1:48041527967:web:07bae07568f5ce8aa8b0aa"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore()
const storage = getStorage()

export {app, db, storage}
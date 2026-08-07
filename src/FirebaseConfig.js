
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArWIZtCiHclvABryvWA_sC6Dz7xip5yyo",
  authDomain: "react-firebase-auth-5fc16.firebaseapp.com",
  projectId: "react-firebase-auth-5fc16",
  storageBucket: "react-firebase-auth-5fc16.firebasestorage.app",
  messagingSenderId: "74027651694",
  appId: "1:74027651694:web:34e61e0a5610c8da85cc7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth ;


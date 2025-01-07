// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwvVXcUcLFGhV69HmP_IAYDzDr2mt2JnQ",
  authDomain: "game-review-531c3.firebaseapp.com",
  projectId: "game-review-531c3",
  storageBucket: "game-review-531c3.firebasestorage.app",
  messagingSenderId: "388431651450",
  appId: "1:388431651450:web:51c9ebb290b26e7c6611c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
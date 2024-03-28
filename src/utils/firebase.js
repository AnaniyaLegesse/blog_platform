// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-3f9e3.firebaseapp.com",
  projectId: "blog-3f9e3",
  storageBucket: "blog-3f9e3.appspot.com",
  messagingSenderId: "440638761503",
  appId: "1:440638761503:web:4ed5858db9fef6b8a9432a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
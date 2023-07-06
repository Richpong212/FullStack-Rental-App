// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8woY1k9FeLfAANoPMF-C4oL97DCeet_E",
  authDomain: "hjem-rental-service.firebaseapp.com",
  projectId: "hjem-rental-service",
  storageBucket: "hjem-rental-service.appspot.com",
  messagingSenderId: "324186135715",
  appId: "1:324186135715:web:327973723e5493d3a1f316",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFE3rroae5cj_VEnvdrTTaGD4GJirPC5w",
    authDomain: "wild-grass-55ac2.firebaseapp.com",
    projectId: "wild-grass-55ac2",
    storageBucket: "wild-grass-55ac2.appspot.com",
    messagingSenderId: "92638689664",
    appId: "1:92638689664:web:a58610f2f6e847b571e965",
    measurementId: "G-Z8D78S9EP3"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth,db };
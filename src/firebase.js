// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9524SBc1Xg2t3z-wyu3neK3kBmEguv-w",
    authDomain: "wild-grass-45ade.firebaseapp.com",
    databaseURL: "https://wild-grass-45ade-default-rtdb.firebaseio.com",
    projectId: "wild-grass-45ade",
    storageBucket: "wild-grass-45ade.appspot.com",
    messagingSenderId: "823593932671",
    appId: "1:823593932671:web:f2e7687ab292434b3fac4a",
    measurementId: "G-WBWL0L7DNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
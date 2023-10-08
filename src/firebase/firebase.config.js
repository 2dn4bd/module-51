// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5IphFVW1nCighmmjoqnKk58GywdbJr1E",
    authDomain: "fir-auth-react-a50ad.firebaseapp.com",
    projectId: "fir-auth-react-a50ad",
    storageBucket: "fir-auth-react-a50ad.appspot.com",
    messagingSenderId: "648847221620",
    appId: "1:648847221620:web:4da9a1c73bff8284060221"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
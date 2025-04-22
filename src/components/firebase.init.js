// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmkx1L2Pz36H_5i8RoRQSdG0v2du_thY",
  authDomain: "hotel-management-eb84e.firebaseapp.com",
  projectId: "hotel-management-eb84e",
  storageBucket: "hotel-management-eb84e.firebasestorage.app",
  messagingSenderId: "789778617694",
  appId: "1:789778617694:web:fff95f96193fc8d9e7abcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
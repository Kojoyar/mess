// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwS_ObnWgFDmnGdN7aAh5k0K_BT246iw",
  authDomain: "messege-e43a4.firebaseapp.com",
  projectId: "messege-e43a4",
  storageBucket: "messege-e43a4.appspot.com",
  messagingSenderId: "376241296087",
  appId: "1:376241296087:web:79a4edabb56159a1df1692",
  measurementId: "G-PK9VP4E57Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export default db
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjra919ejkYIEikvbunv2djWwyFvv4p9s",
  authDomain: "d-abros.firebaseapp.com",
  projectId: "d-abros",
  storageBucket: "d-abros.appspot.com",
  messagingSenderId: "919188746732",
  appId: "1:919188746732:web:68d9bafd092583c05290c9",
  measurementId: "G-GNEV0ZV15T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjra919ejkYIEikvbunv2djWwyFvv4p9s",
  authDomain: "d-abros.firebaseapp.com",
  projectId: "d-abros",
  storageBucket: "d-abros.appspot.com",
  messagingSenderId: "919188746732",
  appId: "1:919188746732:web:68d9bafd092583c05290c9",
  measurementId: "G-GNEV0ZV15T"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if false;
//     }
//   }
// }


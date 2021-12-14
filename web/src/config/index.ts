// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBXV8LFbRxrWBrs1-M0E1ruzU0uqmElHvY",
  authDomain: "child-development-tracker.firebaseapp.com",
  projectId: "child-development-tracker",
  storageBucket: "child-development-tracker.appspot.com",
  messagingSenderId: "521103452783",
  appId: "1:521103452783:web:0298e4d124f5b9d5bcbb9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

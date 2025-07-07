// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzjwXapj00maHh_N_338oxL-3i3qxYzfQ",
  authDomain: "quizanime-5ce0a.firebaseapp.com",
  projectId: "quizanime-5ce0a",
  storageBucket: "quizanime-5ce0a.firebasestorage.app",
  messagingSenderId: "292250318900",
  appId: "1:292250318900:web:de0e48cc59e440341a7261",
  measurementId: "G-HR9PNETT4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
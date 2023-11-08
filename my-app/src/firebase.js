// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzpa3ypY-WldwZcMlMeE1uUpHQi2mvwds",
  authDomain: "my-app-4b190.firebaseapp.com",
  projectId: "my-app-4b190",
  storageBucket: "my-app-4b190.appspot.com",
  messagingSenderId: "607889338434",
  appId: "1:607889338434:web:d867af58c0cf7d88987ddb",
  measurementId: "G-LZHDLW62GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbAgvH7oWiejZ5-VQeiz7Q5XA8dffNmXk",
  authDomain: "ilunch-46933.firebaseapp.com",
  projectId: "ilunch-46933",
  storageBucket: "ilunch-46933.appspot.com",
  messagingSenderId: "208923248052",
  appId: "1:208923248052:web:b29622e4615e9d07499ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
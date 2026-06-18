
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "fir-dc891.firebaseapp.com",
//   projectId: "fir-dc891",
//   storageBucket: "fir-dc891.firebasestorage.app",
//   messagingSenderId: "253714282822",
//   appId: "1:253714282822:web:7899bdc02814ff52ff8d47"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiqai-d6f22.firebaseapp.com",
  projectId: "interviewiqai-d6f22",
  storageBucket: "interviewiqai-d6f22.firebasestorage.app",
  messagingSenderId: "1025758762174",
  appId: "1:1025758762174:web:b242214d0607fe1216faef"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
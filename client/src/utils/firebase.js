
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-dc891.firebaseapp.com",
  projectId: "fir-dc891",
  storageBucket: "fir-dc891.firebasestorage.app",
  messagingSenderId: "253714282822",
  appId: "1:253714282822:web:7899bdc02814ff52ff8d47"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
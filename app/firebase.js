import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB657Sqttk1wRCCvFpnakpqROmdc9p8TUA",
  authDomain: "extra-seminor.firebaseapp.com",
  projectId: "extra-seminor",
  storageBucket: "extra-seminor.firebasestorage.app",
  messagingSenderId: "585132484209",
  appId: "1:585132484209:web:7dab182e26b89cf1661dd0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

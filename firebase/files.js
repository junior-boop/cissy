import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAqUaX9Pw1jq27B3j5CCjpBbvAJdrZ_lo",
    authDomain: "cissy-2a8d6.firebaseapp.com",
    databaseURL: "https://cissy-2a8d6-default-rtdb.firebaseio.com",
    projectId: "cissy-2a8d6",
    storageBucket: "cissy-2a8d6.appspot.com",
    messagingSenderId: "747917946700",
    appId: "1:747917946700:web:2f037d6a36a5c6a428e9e9"
  };


export const app = initializeApp(firebaseConfig,  'Cissy\'s Hair');
export const db = getFirestore(app);
export const storage = getStorage(app)
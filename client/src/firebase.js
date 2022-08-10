import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "video-c2392.firebaseapp.com",
    projectId: "video-c2392",
    storageBucket: "video-c2392.appspot.com",
    messagingSenderId: "1030463145816",
    appId: "1:1030463145816:web:d5d78ea8fbe19e87d3c72d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;
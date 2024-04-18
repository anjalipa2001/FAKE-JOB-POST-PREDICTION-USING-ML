import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { setDoc, doc, getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCS-v-XjwLq3WCnzorQCr0TMqMfxq0Cqxc",
    authDomain: "fake-job-prediction-a37ed.firebaseapp.com",
    projectId: "fake-job-prediction-a37ed",
    storageBucket: "fake-job-prediction-a37ed.appspot.com",
    messagingSenderId: "519404798252",
    appId: "1:519404798252:web:a6203a7f77e30d98cdec89"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);



export { app, auth, db, storage };

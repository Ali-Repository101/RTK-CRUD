import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyADrMh8hjeO1yxqeu0-TW5iDuRZ9T2-dLQ",
    authDomain: "mdbimg-e1a34.firebaseapp.com",
    projectId: "mdbimg-e1a34",
    storageBucket: "mdbimg-e1a34.appspot.com",
    messagingSenderId: "781068433441",
    appId: "1:781068433441:web:2f8392d3773bee36238b60"
  
};

const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);


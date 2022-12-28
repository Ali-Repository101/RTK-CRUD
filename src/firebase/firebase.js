import { initializeApp } from "firebase/app";
import { getAuth,  onAuthStateChanged,   updateProfile } from 'firebase/auth'
import { useEffect, useState } from "react";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyADrMh8hjeO1yxqeu0-TW5iDuRZ9T2-dLQ",
    authDomain: "mdbimg-e1a34.firebaseapp.com",
    projectId: "mdbimg-e1a34",
    storageBucket: "mdbimg-e1a34.appspot.com",
    messagingSenderId: "781068433441",
    appId: "1:781068433441:web:2f8392d3773bee36238b60"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage= getStorage();

// export function signup(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() {
//     return signOut(auth);
// }

//custom hook

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}


//storage

export async function upload(file, currentUser, setLoading){
const fileRef = ref(storage, currentUser.uid + '.png');
setLoading(true);
const snapshot = await uploadBytes(fileRef, file);

const photoURL= await getDownloadURL(fileRef);

updateProfile(currentUser, {photoURL});

setLoading(false);
alert("uploaded file!");
}
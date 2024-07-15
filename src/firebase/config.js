import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import{ getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeykuOh4Jv8aOgPDCOgoysKfhkn3Vb7kU",
    authDomain: "my-task-4129b.firebaseapp.com",
    projectId: "my-task-4129b",
    storageBucket: "my-task-4129b.appspot.com",
    messagingSenderId: "347342929137",
    appId: "1:347342929137:web:17758ee824996fc78dbd50"
};
// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);

//auth => objeto com as configurações de authentication
export const auth = getAuth(app);
// db => objeto com as configurações do firestore
export const db = getFirestore(app);
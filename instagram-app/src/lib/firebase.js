import Firebase from "firebase/compact/app";
import "firebase/compact/firestore";
import "firebase/compact/auth";

// imort the seed file here
 import {seedDatabase} from "../seed";
const config = {
    apiKey: "AIzaSyA-sTDfMCMKJ8foxAZ701IQKge7e-TuEAY",
  authDomain: "instagram-fac8f.firebaseapp.com",
  projectId: "instagram-fac8f",
  storageBucket: "instagram-fac8f.firebasestorage.app",
  messagingSenderId: "487171203655",
  appId: "1:487171203655:web:9e05ef2ab4dedd3682c762"
}
const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file here only once
seedDatabase(firebase);
export {firebase, FieldValue};
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjXDq8gXjyfYAy0bTj6B8M9PGQHjRLcSM",
  authDomain: "template-clothing.firebaseapp.com",
  databaseURL: "https://template-clothing.firebaseio.com",
  projectId: "template-clothing",
  storageBucket: "template-clothing.appspot.com",
  messagingSenderId: "162674449784",
  appId: "1:162674449784:web:e7b7392f87d6f44a1cbc8d",
  measurementId: "G-77RFEGD229",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

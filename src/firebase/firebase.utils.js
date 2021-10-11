import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDMo367ClMs2Qm4FfiAvi1XF-JU9H_9knw",
  authDomain: "react-db-5ff5d.firebaseapp.com",
  projectId: "react-db-5ff5d",
  storageBucket: "react-db-5ff5d.appspot.com",
  messagingSenderId: "706171558022",
  appId: "1:706171558022:web:f78f8ab6ba1d98b8df9907",
  measurementId: "G-D9W05943P5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

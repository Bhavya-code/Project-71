import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyCdy8M_Eccjym2YK-WbFpZMOJNfDNZhJ8Q",
  authDomain: "e-ride-stage-4-92ea0.firebaseapp.com",
  projectId: "e-ride-stage-4-92ea0",
  storageBucket: "e-ride-stage-4-92ea0.appspot.com",
  messagingSenderId: "467896372343",
  appId: "1:467896372343:web:bfbbf0bc0012aeaa8e4a72"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_tWrk9KDMDwqEAKXoGAcBrd7v_-MRyDc",
    authDomain: "eshop-580e0.firebaseapp.com",
    projectId: "eshop-580e0",
    storageBucket: "eshop-580e0.appspot.com",
    messagingSenderId: "813811618615",
    appId: "1:813811618615:web:e7ef6a7fc71248266780b2",
    measurementId: "G-QN7QWKV3PV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
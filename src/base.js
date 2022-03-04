import firebase from "firebase";
const firebaseConfig = {
    //Put your config file here
    apiKey: "AIzaSyBgnDhP1yDo5AeAOEE2XLwZn675DBW2W2A",
    authDomain: "freelancer-29311.firebaseapp.com",
    projectId: "freelancer-29311",
    storageBucket: "freelancer-29311.appspot.com",
    messagingSenderId: "338850157422",
    appId: "1:338850157422:web:7dc5a0bb0ca9b81d03277f",
    measurementId: "G-4GDJ3G46JL"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage,firebase };
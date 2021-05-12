// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVN13rhXZdlRS8VNYahbE2ajTKSK8oan4",
    authDomain: "twitter-clone-two.firebaseapp.com",
    projectId: "twitter-clone-two",
    storageBucket: "twitter-clone-two.appspot.com",
    messagingSenderId: "829023834196",
    appId: "1:829023834196:web:f45e7852125bcd8c591dc1",
    measurementId: "G-G4DDSSM0G4"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
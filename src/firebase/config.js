import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todaysite.firebaseapp.com",
  projectId: "todaysite",
  storageBucket: "todaysite.appspot.com",
  messagingSenderId: "788023222275",
  appId: "1:788023222275:web:acc434dc6085bbbfe4ae36",
};

//firebase init
firebase.initializeApp(firebaseConfig);

//services init
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();


const timestamp=firebase.firestore.Timestamp

export { projectFirestore, projectAuth,timestamp };

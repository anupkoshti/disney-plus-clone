import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNR3uU8F1_x8V4fnDSJnavSM3BNiUBZAs",
  authDomain: "disney-plus-clone-f91b5.firebaseapp.com",
  projectId: "disney-plus-clone-f91b5",
  storageBucket: "disney-plus-clone-f91b5.appspot.com",
  messagingSenderId: "1028996266801",
  appId: "1:1028996266801:web:384a90476eed4a0472ce10",
  measurementId: "G-M9N4PG7Z2S",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAOttW3qbj_U7QMYcmESqpwWyAXBO446wo",
    authDomain: "mj-connect-30f73.firebaseapp.com",
    projectId: "mj-connect-30f73",
    storageBucket: "mj-connect-30f73.appspot.com",
    messagingSenderId: "432262967850",
    appId: "1:432262967850:web:ae8cbdebb2c34b8a7bc953",
    measurementId: "G-QP1DWGP9V6"

  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{auth , provider};
export default db;


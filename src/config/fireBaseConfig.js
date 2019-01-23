 import firebase from 'firebase/app';
 import 'firebase/firebase-firestore';
 import 'firebase/auth';

 // Initialize Firebase
 const firbaseConfig = {
    apiKey: "AIzaSyCpzgzjWUk-Xjia2kq0272rFX2OFudKUrQ",
    authDomain: "net-ninja-marioplan-c1595.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-c1595.firebaseio.com",
    projectId: "net-ninja-marioplan-c1595",
    storageBucket: "net-ninja-marioplan-c1595.appspot.com",
    messagingSenderId: "390855971948"
  };
  firebase.initializeApp(firbaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;
import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyDfpcgcg0RAUCRae20IflQL3aF2-E6qVfk",
    authDomain: "to-do-list-187de.firebaseapp.com",
    databaseURL: "https://to-do-list-187de-default-rtdb.firebaseio.com",
    projectId: "to-do-list-187de",
    storageBucket: "to-do-list-187de.appspot.com",
    messagingSenderId: "201625793758",
    appId: "1:201625793758:web:90469fa4b8d99727ab7e4f",
    measurementId: "G-YXBQRSNMPG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export {db};
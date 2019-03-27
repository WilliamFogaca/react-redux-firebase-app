import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWv5VRNXst9jWG3wtt4auXTd6cnOCowIw",
  authDomain: "react-redux-firebase-app-4afc6.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-app-4afc6.firebaseio.com",
  projectId: "react-redux-firebase-app-4afc6",
  storageBucket: "",
  messagingSenderId: "839785298837"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
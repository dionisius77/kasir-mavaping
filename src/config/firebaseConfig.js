import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB4hnJpCGkz_B26xx7syIuaf1-iSIoIcmQ",
    authDomain: "kasir-mavaping.firebaseapp.com",
    databaseURL: "https://kasir-mavaping.firebaseio.com",
    projectId: "kasir-mavaping",
    storageBucket: "kasir-mavaping.appspot.com",
    messagingSenderId: "617256875510",
    appId: "1:617256875510:web:141716a16fbe7a612b43d7"
  };

let firebaseMain = firebase.initializeApp(firebaseConfig);
let fieldValue = firebase.firestore.FieldValue;

export default {
  firebaseMain: firebaseMain,
  fieldValue: fieldValue,
}
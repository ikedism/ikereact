import firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyArSI4mRKDuRSUD3WY7LSgxoHeVxCZcOA0",
  authDomain: "first-react-db712.firebaseapp.com",
  databaseURL: "https://first-react-db712.firebaseio.com",
  projectId: "first-react-db712",
  storageBucket: "first-react-db712.appspot.com",
  messagingSenderId: "1061246108233",
  appId: "1:1061246108233:web:1cfac1bd0ac14fe930b598",
  measurementId: "G-5R8589063J"
};*/

export const firebaseApp = firebase.initializeApp(firebaseConfig);

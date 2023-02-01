// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { collection } from "firebase/firestore";
import * as f from 'firebase/firestore'
import * as firebase from 'firebase/app'
import * as auth from 'firebase/auth'
import { TaggedTemplateExpr } from "@angular/compiler";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgsggM9Kp1m8WccD3jSNGNPi2YuerLi-o",
  authDomain: "budget-management-2f326.firebaseapp.com",
  projectId: "budget-management-2f326",
  storageBucket: "budget-management-2f326.appspot.com",
  messagingSenderId: "905361174690",
  appId: "1:905361174690:web:cded99dd06c53109d327fb",
  measurementId: "G-9JZG5TMYLW"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
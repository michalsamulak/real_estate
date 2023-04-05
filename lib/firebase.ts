import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwC3_YCEt8Q04U2fgDzt4jtz4QjU8Yepk",
  authDomain: "real-estate-abb18.firebaseapp.com",
  projectId: "real-estate-abb18",
  storageBucket: "real-estate-abb18.appspot.com",
  messagingSenderId: "856836554035",
  appId: "1:856836554035:web:26284e85bd52e29bba1246",
  measurementId: "G-BC7BV6H7QK"
};
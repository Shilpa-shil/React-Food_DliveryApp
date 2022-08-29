import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCkYvb1gdhh_qCh7yUKMRfD6dco9JpxH8",
  authDomain: "restaurantapp-3c726.firebaseapp.com",
  databaseURL: "https://restaurantapp-3c726-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-3c726",
  storageBucket: "restaurantapp-3c726.appspot.com",
  messagingSenderId: "14959696693",
  appId: "1:14959696693:web:62e2f6da48b876bd340a7c"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
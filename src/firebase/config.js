import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyBxWiB_PaC4h9OH4LTUsPWH1-LoVlaYVv8",
  authDomain: "postres-app-b0dfc.firebaseapp.com",
  databaseURL: "https://postres-app-b0dfc-default-rtdb.firebaseio.com",
  projectId: "postres-app-b0dfc",
  storageBucket: "postres-app-b0dfc.appspot.com",
  messagingSenderId: "1095177142115",
  appId: "1:1095177142115:web:e2146e115f86d930b7dd56"
};



const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);


export {
    app,
    db,
    storage
}



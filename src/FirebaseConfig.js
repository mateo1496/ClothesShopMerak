import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6qCghNWUcK9-kJHq0SOsc4vJTooZmxBQ",
  authDomain: "clothesshopmerak.firebaseapp.com",
  projectId: "clothesshopmerak",
  storageBucket: "clothesshopmerak.appspot.com",
  messagingSenderId: "524727702634",
  appId: "1:524727702634:web:ab184de484bf272c6c6613"
};


const app = initializeApp(firebaseConfig);
//ACA CON DB TENGO ACCESO A TODOS MIS DATOS QUE TENGO EN FIRESTORE, Y FIRESTORE ACCEDE A TODAS LAS CONFIGURACIONES EN APP.
export const db = getFirestore(app)
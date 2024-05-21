import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDhh1Yl7-_CR431nBAbfk3eyIQIPLWtlw",
  authDomain: "footerwearbysumit.firebaseapp.com",
  projectId: "footerwearbysumit",
  storageBucket: "footerwearbysumit.appspot.com",
  messagingSenderId: "328707948804",
  appId: "1:328707948804:web:c55d6b73c5920ef50ad051"
};


const app = initializeApp(firebaseConfig);

export let db = getFirestore()
export let auth = getAuth()
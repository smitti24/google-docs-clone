import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSiM9XIy7hXVQAjFBGP5HB6ClKVmYyYJs",
  authDomain: "do-d1617.firebaseapp.com",
  projectId: "do-d1617",
  storageBucket: "do-d1617.appspot.com",
  messagingSenderId: "912585216832",
  appId: "1:912585216832:web:93aaa0ca8f584f9885e0a5",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

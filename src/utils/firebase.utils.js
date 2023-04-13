import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD0q_DioqDiqLZQdZDU5nAgjqCPoX5euQ",
  authDomain: "clothing-db-30abb.firebaseapp.com",
  projectId: "clothing-db-30abb",
  storageBucket: "clothing-db-30abb.appspot.com",
  messagingSenderId: "251747199255",
  appId: "1:251747199255:web:1159832f65523e6a9f6f52",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserFromSignIn = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};

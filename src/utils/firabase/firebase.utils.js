import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTmPFsMGGsTlo9rSupyLnwuGTNqBRJSDI',
  authDomain: 'clothing-shop-db-ff9c3.firebaseapp.com',
  projectId: 'clothing-shop-db-ff9c3',
  storageBucket: 'clothing-shop-db-ff9c3.appspot.com',
  messagingSenderId: '788338389951',
  appId: '1:788338389951:web:92e56baf59d811c389670a',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data not exists
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.error('error creating the user', e.message);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};

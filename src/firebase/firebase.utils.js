import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBac8pmfBVmbZ0mOFBjWsva77s_IW52NGg",
  authDomain: "crwn-db-118e5.firebaseapp.com",
  projectId: "crwn-db-118e5",
  storageBucket: "crwn-db-118e5.appspot.com",
  messagingSenderId: "403306885151",
  appId: "1:403306885151:web:2b96126b93949ab230252a",
  measurementId: "G-6BQXVFS303"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC_ILo_SbzSl8-DIhRqbCm84CER15WfUzQ",
    authDomain: "crwn-db-75736.firebaseapp.com",
    databaseURL: "https://crwn-db-75736.firebaseio.com",
    projectId: "crwn-db-75736",
    storageBucket: "crwn-db-75736.appspot.com",
    messagingSenderId: "667480245812",
    appId: "1:667480245812:web:33404128c128b2918aac61",
    measurementId: "G-22RD4NFLVY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

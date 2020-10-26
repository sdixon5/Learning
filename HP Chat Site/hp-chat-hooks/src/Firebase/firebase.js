import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyAnnwhz0i0wExPBzDiRlD6QcG9B82t_URM",
  authDomain: "hpchat-c3d47.firebaseapp.com",
  databaseURL: "https://hpchat-c3d47.firebaseio.com",
  projectId: "hpchat-c3d47",
  storageBucket: "hpchat-c3d47.appspot.com",
  messagingSenderId: "914780045579",
  appId: "1:914780045579:web:bf48b4ee0b4bc5724ae20e",
  measurementId: "G-VNBS7W0EJC",
});

// apiKey: "AIzaSyAnnwhz0i0wExPBzDiRlD6QcG9B82t_URM",
//     authDomain: "hpchat-c3d47.firebaseapp.com",
//     databaseURL: "https://hpchat-c3d47.firebaseio.com",
//     projectId: "hpchat-c3d47",
//     storageBucket: "hpchat-c3d47.appspot.com",
//     messagingSenderId: "914780045579",
//     appId: "1:914780045579:web:bf48b4ee0b4bc5724ae20e",
//     measurementId: "G-VNBS7W0EJC"

export const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default app;

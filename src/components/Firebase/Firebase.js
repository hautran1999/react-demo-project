import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDgFuFprP2fQjTzXvwKFg-3TEpJyn0mErI",
  authDomain: "react-project-715cb.firebaseapp.com",
  databaseURL: "https://react-project-715cb.firebaseio.com",
  projectId: "react-project-715cb",
  storageBucket: "react-project-715cb.appspot.com",
  messagingSenderId: "387618651290",
  appId: "1:387618651290:web:5c1f574eb4601c6d8f3323",
  measurementId: "G-TN1F7TZSJR",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

// export const generateUserDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email, displayName, photoURL } = user;
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         photoURL,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.error("Error creating user document", error);
//     }
//   }
//   return getUserDocument(user.uid);
// };

// const getUserDocument = async (uid) => {
//   if (!uid) return null;
//   try {
//     const userDocument = await firestore.doc(`users/${uid}`).get();

//     return {
//       uid,
//       ...userDocument.data(),
//     };
//   } catch (error) {
//     console.error("Error fetching user", error);
//   }
// };

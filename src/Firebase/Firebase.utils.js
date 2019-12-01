import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAH7dwCvwLU2z92ApKE1wYjNlwIiBqXQGs",
  authDomain: "crwn-db-dc72b.firebaseapp.com",
  databaseURL: "https://crwn-db-dc72b.firebaseio.com",
  projectId: "crwn-db-dc72b",
  storageBucket: "crwn-db-dc72b.appspot.com",
  messagingSenderId: "932851742034",
  appId: "1:932851742034:web:06559fcefa11841d26b68b",
  measurementId: "G-ZFKE73RT8Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

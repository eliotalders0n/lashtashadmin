import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_7DlXM9GoRQMMpEqHeVXQFQ9VzIBBJxk",
  authDomain: "lashtash-62578.firebaseapp.com",
  projectId: "lashtash-62578",
  storageBucket: "lashtash-62578.appspot.com",
  messagingSenderId: "1027681715279",
  appId: "1:1027681715279:web:0f2e6fceec7c186c22d63a"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
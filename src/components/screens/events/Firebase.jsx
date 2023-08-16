import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVfCYE2DOBYLGxiePTCOmIMxBOiQTCmXs",
  authDomain: "talento-72b96.firebaseapp.com",
  projectId: "talento-72b96",
  storageBucket: "talento-72b96.appspot.com",
  messagingSenderId: "314889557618",
  appId: "1:314889557618:web:29504289d20243a943d4eb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const authInstance = firebase.auth();
export default authInstance;

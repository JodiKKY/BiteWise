// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FuGbXyxtngkTintrct5BU5rVnMIEMdE",
  authDomain: "bitewise-faf99.firebaseapp.com",
  databaseURL: "https://bitewise-faf99-default-rtdb.firebaseio.com",
  projectId: "bitewise-faf99",
  storageBucket: "bitewise-faf99.firebasestorage.app",
  messagingSenderId: "272938867658",
  appId: "1:272938867658:web:1965e531fe381465508d33",
  measurementId: "G-M43JR717G7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export everything at once to avoid duplicate exports
export { auth, provider, analytics, signInWithEmailAndPassword, signInWithPopup };
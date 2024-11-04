// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5FuGbXyxtngkTintrct5BU5rVnMIEMdE",
  authDomain: "bitewise-faf99.firebaseapp.com",
  databaseURL: "https://bitewise-faf99-default-rtdb.firebaseio.com",
  projectId: "bitewise-faf99",
  storageBucket: "bitewise-faf99.firebasestorage.app",
  messagingSenderId: "272938867658",
  appId: "1:272938867658:web:1965e531fe381465508d33",
  measurementId: "G-M43JR717G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

export {app,auth}
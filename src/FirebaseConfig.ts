import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2Sp6oEs-C0R5hJm2ZdR-axDhOnF5LFT8",
  authDomain: "owls-app-257b4.firebaseapp.com",
  projectId: "owls-app-257b4",
  storageBucket: "owls-app-257b4.appspot.com",
  messagingSenderId: "156164040761",
  appId: "1:156164040761:web:6b54de6177f0d3581ec5e8",
  measurementId: "G-MGWJ8N6JWW",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

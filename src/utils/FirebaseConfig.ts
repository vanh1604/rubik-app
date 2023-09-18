import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB-nFjc26W41ejm2ekL9s0ri1Kp5O_uMgA",
	authDomain: "rubik-app-f08e0.firebaseapp.com",
	projectId: "rubik-app-f08e0",
	storageBucket: "rubik-app-f08e0.appspot.com",
	messagingSenderId: "577951396470",
	appId: "1:577951396470:web:c582243ade7b1040146557",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

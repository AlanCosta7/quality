import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: 'gs://' + process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const $analytics = getAnalytics(app);
const $firestore = getFirestore(app);

const $auth = getAuth(app);
const $storage = getStorage(app);
const $functions = getFunctions(getApp());

if (location.hostname === "localhost") {
  // connectFirestoreEmulator($firestore, 'localhost', 8085);
  // connectAuthEmulator($auth, "http://localhost:9099");
  // connectStorageEmulator($storage, "localhost", 9199);
  // connectFunctionsEmulator($functions, "localhost", 5001);
}

$auth.languageCode = 'pt-BR';

export { $firestore, $functions, $auth, $storage, $analytics};

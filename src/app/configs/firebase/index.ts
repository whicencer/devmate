import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfUK9Ihg7PNoK9cZKyH9ZDJ9Kh5Hwb43g",
  authDomain: "devmate-b75c3.firebaseapp.com",
  projectId: "devmate-b75c3",
  storageBucket: "devmate-b75c3.appspot.com",
  messagingSenderId: "1025069126811",
  appId: "1:1025069126811:web:a1f6eb48ab39481193223e",
  measurementId: "G-6VF21X7Y7N"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};
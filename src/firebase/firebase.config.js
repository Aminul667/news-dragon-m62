// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_6aHWUkzIzpoEDh0STbVyIvz9vgHj6kw",
  authDomain: "news-dragon-m62.firebaseapp.com",
  projectId: "news-dragon-m62",
  storageBucket: "news-dragon-m62.appspot.com",
  messagingSenderId: "628520229113",
  appId: "1:628520229113:web:f21d2dbc46705f8dfcea28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
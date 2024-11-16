
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyArs4ffWj2Kn7fIOq8zkU07KI3sgXFxKBg",
  authDomain: "career-guidance-705d2.firebaseapp.com",
  projectId: "career-guidance-705d2",
  storageBucket: "career-guidance-705d2.appspot.com",
  messagingSenderId: "688778187124",
  appId: "1:688778187124:web:1430e29ce90793f2f2dc21"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

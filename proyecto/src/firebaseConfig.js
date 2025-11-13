import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyC_WFjtG8lbjWP84i5eSe2uTomMBqkrCv0",
  authDomain: "pokeapi-7896e.firebaseapp.com",
  projectId: "pokeapi-7896e",
  storageBucket: "pokeapi-7896e.firebasestorage.app",
  messagingSenderId: "161412864400",
  appId: "1:161412864400:web:5de9dfbb94d130a2a33b15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!
export { auth, db };
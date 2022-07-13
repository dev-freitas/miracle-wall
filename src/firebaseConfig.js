import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvkuodsXdEfzd750bXvN2oNmdQYnLED8A",
  authDomain: "life-ahead-45763.firebaseapp.com",
  projectId: "life-ahead-45763",
  storageBucket: "life-ahead-45763.appspot.com",
  messagingSenderId: "868152282048",
  appId: "1:868152282048:web:d35eed806136b895d45625"
  };

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();



// const colRef = collection(db, 'users')
// getDocs(colRef)
//   .then((snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//         users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users)
//   })

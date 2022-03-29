// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";
// import { collection, getFirestore , query } from "firebase/firestore/lite";

// const firebaseConfig = {
//     apiKey: "AIzaSyDXJqcraxAoT4Dt4kgQsvB1criJ1rq_WkI",
//     authDomain: "instagram-clone-f7c0d.firebaseapp.com",
//     projectId: "instagram-clone-f7c0d",
//     storageBucket: "instagram-clone-f7c0d.appspot.com",
//     messagingSenderId: "424946430203",
//     appId: "1:424946430203:web:92eb6eb3b7d7f2a6a1805e"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const colref = collection(db, 'posts');
// const auth = getAuth();
// const storage = getStorage(app);
// //const provider=new GoogleAuthProvider()

// export { db, auth, storage , colref};

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXJqcraxAoT4Dt4kgQsvB1criJ1rq_WkI",
  authDomain: "instagram-clone-f7c0d.firebaseapp.com",
  projectId: "instagram-clone-f7c0d",
  storageBucket: "instagram-clone-f7c0d.appspot.com",
  messagingSenderId: "424946430203",
  appId: "1:424946430203:web:92eb6eb3b7d7f2a6a1805e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

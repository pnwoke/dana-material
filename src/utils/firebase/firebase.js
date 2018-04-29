import * as firebase from 'firebase';

// Initialize Firebase
// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

const config = {
    apiKey: "AIzaSyDYpUGCvttWWqNcTu13RmzK9B7BWRXntZk",
    authDomain: "vms-react.firebaseapp.com",
    databaseURL: "https://vms-react.firebaseio.com",
    projectId: "vms-react",
    storageBucket: "vms-react.appspot.com",
    messagingSenderId: "1026701848093"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };

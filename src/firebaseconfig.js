import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcHqxDHOMBk59sN6SOIKUf3XWUK5teNeM",
    authDomain: "defhacks-database.firebaseapp.com",
    databaseURL: "https://defhacks-database.firebaseio.com",
    projectId: "defhacks-database",
    storageBucket: "defhacks-database.appspot.com",
    messagingSenderId: "21353571598",
    appId: "1:21353571598:web:ff0f14409f58b9c6afe35f",
    measurementId: "G-30LP2F5CLN"
};

function initialize() {
    firebase.initializeApp(firebaseConfig);
}

export default initialize;

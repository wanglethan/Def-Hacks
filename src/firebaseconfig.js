import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDV7e4g7YUJVdVXzfLl_639qVMhIk8z2EY",
    authDomain: "testproject-7ae26.firebaseapp.com",
    databaseURL: "https://testproject-7ae26.firebaseio.com",
    projectId: "testproject-7ae26",
    storageBucket: "testproject-7ae26.appspot.com",
    messagingSenderId: "159577437203",
    appId: "1:159577437203:web:b0ffc8003b5ce902b5fbe6",
    measurementId: "G-E6ZMYFSWCS"
};

function initialize() {
    firebase.initializeApp(firebaseConfig);
}

export default initialize;

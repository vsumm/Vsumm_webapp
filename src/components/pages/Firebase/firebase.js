import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyBo6stmR8IiPMZTAiZi-W1Wkg21HY213nQ",
    authDomain: "fraction-app.firebaseapp.com",
    databaseURL: "https://fraction-app-default-rtdb.firebaseio.com",
    projectId: "fraction-app",
    storageBucket: "fraction-app.appspot.com",
    messagingSenderId: "481746138042",
    appId: "1:481746138042:web:c2f4558f301458e106a383",
    measurementId: "G-733PHS2S1Q"
};

const fire = firebase.initializeApp(config);
export default fire;
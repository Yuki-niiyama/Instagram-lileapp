import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length){
    // Your web app's Firebase configuration
    const firebaseConfig = {
        //env失敗
        // apiKey: prosess.env.FIREBASE_API_KEY,
        // authDomain: prosess.env.FIREBASE_AUTH_DOMAIN,
        // databaseURL: prosess.env.FIREBASE_DATABASE_URL,
        // projectId: prosess.env.FIREBASE_PROJECT_ID,
        // storageBucket: prosess.env.FIREBASE_STORAGEING_BUKET,
        // messagingSenderId: prosess.env.FIREBASE_MESSAGING_SENDER_ID,
        // appId: prosess.env.FIREBASE_APP_ID
        apiKey: "AIzaSyCDKmbo4POjNS6tlPVTRWc2GKp7wNJ-c5s",
        authDomain: "sns-app-cdcf6.firebaseapp.com",
        databaseURL: "https://sns-app-cdcf6.firebaseio.com",
        projectId: "sns-app-cdcf6",
        storageBucket: "sns-app-cdcf6.appspot.com",
        messagingSenderId: "940869088464",
        appId: "1:940869088464:web:4b9970135b5da4ba9edad5"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()

export{
    firebase,
    db
}





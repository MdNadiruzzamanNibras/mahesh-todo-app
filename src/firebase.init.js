import firebase from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCadGVU3mBivWIaZ2P4kbPikt92hFH9ciU",
  authDomain: "mahesh-list-app.firebaseapp.com",
  projectId: "mahesh-list-app",
  storageBucket: "mahesh-list-app.appspot.com",
  messagingSenderId: "766751778495",
  appId: "1:766751778495:web:137a303068af3bb4ac880a"
};

 firebase.initializeApp(firebaseConfig);

 export default firebase;
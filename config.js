import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAF5-N5bEsBP8CNqz9cxXOyVcPBDeix-0w",
  authDomain: "e-ride-projects-b4769.firebaseapp.com",
  projectId: "e-ride-projects-b4769",
  storageBucket: "e-ride-projects-b4769.appspot.com",
  messagingSenderId: "220723442076",
  appId: "1:220723442076:web:8ce23f4cc37abe32a81859"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

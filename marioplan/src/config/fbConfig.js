  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAs7hcYTMlg1kNfolyVbKbrrRTw05A8vIQ",
    authDomain: "net-ninja-marioplan-6d5c1.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-6d5c1.firebaseio.com",
    projectId: "net-ninja-marioplan-6d5c1",
    storageBucket: "",
    messagingSenderId: "828671747822",
    appId: "1:828671747822:web:58b6baccbf86408a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
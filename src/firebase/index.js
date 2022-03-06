import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA_TpchXd0UaLeCpbEUkTieOhXDovOTEv0",
  authDomain: "tatilandia-dbbe5.firebaseapp.com",
  projectId: "tatilandia-dbbe5",
  storageBucket: "tatilandia-dbbe5.appspot.com",
  messagingSenderId: "342384088246",
  appId: "1:342384088246:web:0f6a3227cb207d8ef7c217"
  };

  const app = firebase.initializeApp(firebaseConfig);


  export const getFirebase = () => app;
  export const getFirestore = () => firebase.firestore(app);
  

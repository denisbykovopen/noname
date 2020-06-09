import * as fire from "firebase";

const config = {
  apiKey: "AIzaSyAA7Yp_tAr0CooRkXCJSMwaB5UDrSV46ko",
  authDomain: "fire-auth-007.firebaseapp.com",
  databaseURL: "https://fire-auth-007.firebaseio.com",
  projectId: "fire-auth-007",
  storageBucket: "fire-auth-007.appspot.com",
  messagingSenderId: "1090829032779",
  appId: "1:1090829032779:web:2a88ec7ead9ee410945cce",
};

fire.initializeApp(config);

const db = fire.database();

const sv = fire.database.ServerValue;

const msgsRef = db.ref("rooms/root/msgs");

const msgRef = (msgId: string): fire.database.Reference =>
  db.ref(`rooms/root/msgs/${msgId}`);

export { fire, db, sv, msgsRef, msgRef };

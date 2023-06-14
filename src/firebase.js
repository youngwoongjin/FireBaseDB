//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "babylion-ac7ad.firebaseapp.com",
  projectId: "babylion-ac7ad",
  storageBucket: "babylion-ac7ad.appspot.com",
  messagingSenderId: "559321798308",
  appId: "1:559321798308:web:7cf8afe5854981e8e07831",
  measurementId: `${process.env.REACT_APP_FIREBASE_ID}`,
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };

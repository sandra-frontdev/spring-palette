import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDH7SONxSO7ZQPSrqmYHaOAICVo1fmwiPM',
  authDomain: 'color-picker-fe5cb.firebaseapp.com',
  projectId: 'color-picker-fe5cb',
  storageBucket: 'color-picker-fe5cb.firebasestorage.app',
  messagingSenderId: '943772550167',
  appId: '1:943772550167:web:131b1a284947cdbd778852',
  measurementId: 'G-DTVXHFYV5Q',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);

export { app, db, analytics };

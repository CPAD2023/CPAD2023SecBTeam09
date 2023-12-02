// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiFTeZ8KeVFbspJKGrnBu77JZqMcCELBs",
  authDomain: "delivery-app-auth-4de50.firebaseapp.com",
  projectId: "delivery-app-auth-4de50",
  storageBucket: "delivery-app-auth-4de50.appspot.com",
  messagingSenderId: "376201538229",
  appId: "1:376201538229:web:e320fd3767985a2d7d2cfc",
  measurementId: "G-600SLT2JJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
  
export { app, auth, getApp, getAuth };
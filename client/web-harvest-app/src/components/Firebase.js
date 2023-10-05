import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuQVSnioXK_YnCtBqEybUqCRIzCK368Uw",
  authDomain: "webharvest-5d7ee.firebaseapp.com",
  projectId: "webharvest-5d7ee",
  storageBucket: "webharvest-5d7ee.appspot.com",
  messagingSenderId: "1078878611358",
  appId: "1:1078878611358:web:d724385b506ef88e06988f"
};

const app = initializeApp(firebaseConfig);
export default app;
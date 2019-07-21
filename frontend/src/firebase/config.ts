const firebaseConfig = {
  apiKey: process.env.REACT_APP_DEV_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_DEV_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_FIREBASE_APP_ID
};

export default firebaseConfig;

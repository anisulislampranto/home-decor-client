import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});

  const auth = getAuth();

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });

    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    users,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;

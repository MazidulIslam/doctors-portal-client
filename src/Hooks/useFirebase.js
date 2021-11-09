import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = { email, displayName: name };

        setUser(newUser);
        // save user to database
        saveUserToDatabase(email, name, "POST");
        // send name to firebase

        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        const user = userCredential.user;
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // Signed in
        const user = userCredential.user;
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // google sign in
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUserToDatabase(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // observe user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
        // ...
      } else {
        setUser({});
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // is admin
  useEffect(() => {
    fetch(`http://localhost:7000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  const saveUserToDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:7000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());
  };
  return {
    token,
    admin,
    authError,
    user,
    isLoading,
    registerUser,
    loginUser,
    logOut,
    signInWithGoogle,
  };
};
export default useFirebase;

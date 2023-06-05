import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const updateUser=(name,photo)=>{
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  const logOut=()=>{
    return signOut(auth);
  }
  const googleSignIn=()=>{
    setLoading(true)
return signInWithPopup(auth,googleProvider)
  }
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false)
        console.log(currentUser);
    })
    return ()=>{
        return unsubscribe()
    }
},[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

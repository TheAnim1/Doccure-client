import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

 initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const auth = getAuth();
    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('') ;
            // ...
          })
          .catch((error) => {
            
           setAuthError(error.message) ;
         
          })
          .finally(()=> setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
    setAuthError('') ;
  })
  .catch((error) => {
    setAuthError(error.message) ;
  })
  .finally(()=> setIsLoading(false));

    }
    // Observe user state 
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              
            } else {
             setUser({})
            }

            setIsLoading(false)
          });
          return () => unsubscribe;
          
    },[])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logout,
        loginUser, 
        
    }
}

export default useFirebase;
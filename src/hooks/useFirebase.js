import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuth from './../Firebase/firebase.init';

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("inside state changed", user);
                setUser(user);
            }
        })
    }, [])

    const signOutGoogle=()=>{
        const auth = getAuth();
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    return {
        user,
        error,
        signInGoogle,
        signOutGoogle
    }
}

export default useFirebase;
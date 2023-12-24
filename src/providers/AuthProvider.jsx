import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()
const googleProvider = new GoogleAuthProvider()
// github
const githubProvider = new GithubAuthProvider()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading, setLoading] = useState(true)


      // google login 
      const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // github login 
    const githubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }


    // login 
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create user 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout 
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        googleLogin,
        githubLogin,
        userLogin,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
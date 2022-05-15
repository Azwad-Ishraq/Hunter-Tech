import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

initializeAuthentication()


const useFirebase = () => {
    // user state 
    const [user, setUser] = useState({})

    // loading state to track while logging process is in progress
    const [loading, setLoading] = useState()

    // auth
    const auth = getAuth()

    // auth error state
    const [authError, setAuthError] = useState('')

    // google sign in
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (location, navigate) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {


                // The signed-in user info.
                const user = result.user;

                // setting user to user state
                setUser(user)

                // emptying auth error
                setAuthError('')

                //redirecting user 
                const destination = location.state?.from || '/';
                navigate(destination)

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setAuthError(errorMessage)

            })
            .finally(() => setLoading(false))

    }

    // Create user with email and password
    const registerUser = (email, password, name, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                setAuthError('')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    setAuthError('')
                }).catch((error) => {
                    // An error occurred
                    setAuthError(error.message)
                });


                navigate('/')
                console.log(navigate)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)

            })
            .finally(() => setLoading(false))
    }
    

    // login
    const loginUser = (email, password, location, navigate) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuthError('')
                const destination = location.state?.from || '/'
                navigate(destination)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(()=> setLoading(false))
    }



    // logout
    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))

    }


    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [])


    return {
        handleGoogleSignIn,
        user,
        authError,
        loading,
        registerUser,
        logout,
        loginUser
    }
}



export default useFirebase
import firebase_app from "./firebase";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithRedirect, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { isMobile } from 'react-device-detect';

export const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {

    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const error = null

        return { result, error };
    } catch (err) {
        const error = err;
        const result = null
        return { result, error };
    }

}


export const logOut = () => {
    signOut(auth)
}


export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    if (isMobile) {
        return signInWithRedirect(auth, provider)
    }
    signInWithPopup(auth, provider).then(

    ).catch()
}

export const fbSignIn = () => {
    const provider = new FacebookAuthProvider();
    if (isMobile) {
        return signInWithRedirect(auth, provider)
    }
    signInWithPopup(auth, provider).then().catch()
}

export const githubSignIn = () => {
    const provider = new GithubAuthProvider();
    if (isMobile) {
        return signInWithRedirect(auth, provider)
    }
    signInWithPopup(auth, provider).then().catch()
}


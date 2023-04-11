import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from "firebase/auth";
import { isMobile } from "react-device-detect";
import { auth } from './firebase/firebaseSignInMethod';

type IAuthProvider = "Google" | "Facebook" | "Github";

export const handleAuthProviderLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    authProvider: IAuthProvider, redirect: () => Promise<boolean>
) => {
    e.preventDefault();

    let provider;

    switch (authProvider) {
        case "Google":
            provider = new GoogleAuthProvider();
            break;
        case "Facebook":
            provider = new FacebookAuthProvider();
            break;
        case "Github":
            provider = new GithubAuthProvider();
            break;
        default:
            throw new Error("Unsupported auth provider");
    }

    try {
        if (isMobile) {
            await signInWithRedirect(auth, provider);
        } else {

            await signInWithPopup(auth, provider);
        }
        return redirect()

    } catch (err) {
        console.log(err);
    }
};
import React, { useReducer } from "react";
import { SignUp } from "../../../components/auth/signup";
import { SignIn } from "../../../components/auth/signin";
import styles from "./login.module.scss";
import cls from "classnames";
import {
    auth,
    fbSignIn,
    githubSignIn,
    googleSignIn,
} from "../../../lib/firebase/firebaseSignInMethod";
import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

type IAuthProvider = "Google" | "Facebook" | "Github";

const Login = () => {
    const router = useRouter();

    const handleAuthProviderLogin = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        authProvider: IAuthProvider
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

                return router.push("/");
            }
            signInWithPopup(auth, provider);
            await signInWithPopup(auth, provider);
            router.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.login_box}>
            <SignIn />
            <div className={styles.or}>OR</div>

            <div className={styles.right}>
                <button
                    className={cls(styles.social_signin, styles.facebook)}
                    onClick={(e) => handleAuthProviderLogin(e, "Facebook")}
                >
                    Log in with facebook
                </button>
                <button
                    className={cls(styles.social_signin, styles.github)}
                    onClick={(e) => handleAuthProviderLogin(e, "Github")}
                >
                    Log in with GitHub
                </button>
                <button
                    className={cls(styles.social_signin, styles.google)}
                    onClick={(e) => handleAuthProviderLogin(e, "Google")}
                >
                    Log in with Google+
                </button>
            </div>
        </div>
    );
};

export default Login;

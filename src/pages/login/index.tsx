import React, { useReducer } from "react";
import { SignUp } from "../../../components/auth/signup";
import { SignIn } from "../../../components/auth/signin";
import styles from "./login.module.scss";
import cls from "classnames";
import {
    auth

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
import { handleAuthProviderLogin } from "../../../lib/utlis";


const Login = () => {
    const router = useRouter();
    
    const redirect = () => {
        return router.push('/')
    }
    
  

    return (
        <div className={styles.login_box}>
            <SignIn />
            <div className={styles.or}>OR</div>

            <div className={styles.right}>
                <button
                    className={cls(styles.social_signin, styles.facebook)}
                    onClick={(e) => handleAuthProviderLogin(e, "Facebook", redirect)}
                >
                    Log in with facebook
                </button>
                <button
                    className={cls(styles.social_signin, styles.github)}
                    onClick={(e) => handleAuthProviderLogin(e, "Github", redirect)}
                >
                    Log in with GitHub
                </button>
                <button
                    className={cls(styles.social_signin, styles.google)}
                    onClick={(e) => handleAuthProviderLogin(e, "Google", redirect)}
                >
                    Log in with Google+
                </button>
            </div>
        </div>
    );
};

export default Login;

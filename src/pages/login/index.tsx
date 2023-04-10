import React from "react";
import { SignUp } from "../../../components/auth/signup";
import { SignIn } from "../../../components/auth/signin";
import styles from "./login.module.scss";
import cls from "classnames";
import { googleSignIn } from "../../../lib/firebase/firebaseSignInMethod";

const Login = () => {
    return (
        <div className={styles.login_box}>
            <SignIn />
            <div className={styles.or}>OR</div>

            <div className={styles.right}>
                <button className={cls(styles.social_signin, styles.facebook)}>
                    Log in with facebook
                </button>
                <button className={cls(styles.social_signin, styles.github)}>
                    Log in with GitHub
                </button>
                <button className={cls(styles.social_signin, styles.google)} onClick={googleSignIn}>
                    Log in with Google+
                </button>
            </div>
        </div>
    );
};

export default Login;

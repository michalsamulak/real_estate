import React from "react";
import { SignUp } from "../../../components/auth/signup"
import { SignIn } from "../../../components/auth/signin";
import styles from "./join.module.scss";
import cls from "classnames";

const Login = () => {
    return (
        <div className={styles.login_box}>
                <SignUp />
                <div className={styles.or}>OR</div>

                <div className={styles.right}>
                    

                    <button
                        className={cls(styles.social_signin, styles.facebook)}
                    >
                        SingUp with Facebook
                    </button>
                    <button
                        className={cls(styles.social_signin, styles.github)}
                    >
                        SingUp with GitHub
                    </button>
                    <button
                        className={cls(styles.social_signin, styles.google)}
                    >
                        SingUp with Google+
                    </button>
                </div>
            </div>
     
    );
};

export default Login;

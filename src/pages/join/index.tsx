import React from "react";
import { SignUp } from "../../../components/auth/signup";
import styles from "./join.module.scss";
import cls from "classnames";
import { useRouter } from "next/router";
import { handleAuthProviderLogin } from "../../../lib/utlis";

const Login = () => {
    const router = useRouter();

    const redirect = () => {
        return router.push("/admin");
    };

    return (
        <div className={styles.login_box}>
            <SignUp />
            <div className={styles.or}>OR</div>

            {/* <div className={styles.right}>
                <button
                    className={cls(styles.social_signin, styles.facebook)}
                    onClick={(e) =>
                        handleAuthProviderLogin(e, "Facebook", redirect)
                    }
                >
                    SingUp with Facebook
                </button>
                <button
                    className={cls(styles.social_signin, styles.github)}
                    onClick={(e) =>
                        handleAuthProviderLogin(e, "Github", redirect)
                    }
                >
                    SingUp with GitHub
                </button>
                <button
                    className={cls(styles.social_signin, styles.google)}
                    onClick={(e) =>
                        handleAuthProviderLogin(e, "Google", redirect)
                    }
                >
                    SingUp with Google+
                </button>
            </div> */}
        </div>
    );
};

export default Login;

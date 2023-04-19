import { SignIn } from "../../components/auth/Signin";
import styles from "../../styles/Login.module.scss";

import cls from "classnames";

import { useRouter } from "next/router";
import { handleAuthProviderLogin } from "../../utils/login/auth_provider_utlis";
import Head from "next/head";

const Login = () => {
    const router = useRouter();

    const redirect = async () => {
        await router.push("/");
    };

    return (
        <>
            <Head>
                <title>Sign in</title>
            </Head>
            <div className={styles.login_box}>
                <SignIn />
                <div className={styles.or}>OR</div>

                <div className={styles.right}>
                    <button
                        className={cls(styles.social_signin, styles.facebook)}
                        type="button"
                        onClick={() =>
                            handleAuthProviderLogin("facebook", redirect)
                        }
                    >
                        Log in with facebook
                    </button>
                    <button
                        className={cls(styles.social_signin, styles.github)}
                        onClick={() =>
                            handleAuthProviderLogin("github", redirect)
                        }
                    >
                        Log in with GitHub
                    </button>
                    <button
                        className={cls(styles.social_signin, styles.google)}
                        onClick={() =>
                            handleAuthProviderLogin("google", redirect)
                        }
                    >
                        Log in with Google
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;

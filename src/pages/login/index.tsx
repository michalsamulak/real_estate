import { SignInForm } from "../../components/auth/SigninForm";
import styles from "../../styles/Login.module.scss";

import cls from "classnames";

import { useRouter } from "next/router";
import { handleAuthProviderLogin } from "../../utils/login/auth_provider_utlis";
import Head from "next/head";
import { SignInExternal } from "@/components/auth/SignInExternal";
import { PageWrapper } from "@/components/PageWrapper";

const Login = () => {
    const router = useRouter();

    const redirect = async () => {
        await router.push("/");
    };

    return (
        <>
        <PageWrapper title="Sign in" />

            <div className={styles.login_box}>
                <SignInForm />
                <div className={styles.or}>OR</div>
                <SignInExternal />
                {/* <div className={styles.right}>
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
                </div> */}
            </div>
        </>
    );
};

export default Login;

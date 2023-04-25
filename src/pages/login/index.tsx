import { useRouter } from "next/router";
import { SignInForm } from "@/components/auth/SigninForm";
import { SignInExternal } from "@/components/auth/SignInExternal";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "../../styles/Login.module.scss";

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
            </div>
        </>
    );
};

export default Login;

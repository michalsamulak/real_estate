import { SignUpForm } from "@/components/auth/SignupForm";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "../../styles/Join.module.scss";

const Login = () => {
    return (
        <>
              <PageWrapper title="Sign up" />

            <div className={styles.signin_box}>
                <SignUpForm />
            </div>
        </>
    );
};

export default Login;

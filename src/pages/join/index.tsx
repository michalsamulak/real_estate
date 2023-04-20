import React from "react";
import Head from "next/head";
import { SignUpForm } from "../../components/auth/SignupForm";
import styles from "../../styles/Join.module.scss";

const Login = () => {
    return (
        <>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className={styles.signin_box}>
                <SignUpForm />
            </div>
        </>
    );
};

export default Login;

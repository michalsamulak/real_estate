import React from "react";
import Head from "next/head";
import { SignUp } from "../../components/auth/Signup";
import styles from "../../styles/Join.module.scss";

const Login = () => {
    return (
        <>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className={styles.signin_box}>
                <SignUp />
            </div>
        </>
    );
};

export default Login;

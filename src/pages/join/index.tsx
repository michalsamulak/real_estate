import React from "react";
import Head from "next/head";
import { SignUpForm } from "../../components/auth/SignupForm";
import styles from "../../styles/Join.module.scss";
import { PageWrapper } from "@/components/PageWrapper";

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

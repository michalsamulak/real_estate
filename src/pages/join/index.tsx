import React from "react";
import { SignUp } from "../../../components/auth/signup";
import styles from "./join.module.scss";




const Login = () => {
  

    return (
        <div className={styles.signin_box}>
            <SignUp />
        </div>
    );
};

export default Login;

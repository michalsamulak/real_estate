import React from "react";
import { SignUp } from "../../../components/signup/signup";
import { SignIn } from "../../../components/signin/signin";
import styles from './join.module.scss'
import cls from "classnames"


const Login = () => {
    return (
        <div className={styles.login_box}>
  <div className={styles.left}>
    <h1 className={styles.header}>Sign up</h1>
    
    <input className={styles.input} type="text" name="email" placeholder="E-mail" />
    <input className={styles.input} type="password" name="password" placeholder="Password" />
    <input className={styles.input} type="password" name="password2" placeholder="Retype password" />
    
    <input className={styles.input} type="submit" name="signup_submit" value="Sign me up" />
  </div>
    <div className={styles.or}>OR</div>
  
  <div className={styles.right}>
    {/* <span className={styles.loginwith}>Sign in with<br />social network</span> */}
    
    <button className={cls(styles.social_signin, styles.facebook)}>Log in with facebook</button>
    <button className={cls(styles.social_signin, styles.github)}>Log in with GitHub</button>
    <button className={cls(styles.social_signin, styles.google)}>Log in with Google+</button>
  </div>
</div>

    );
};

export default Login;

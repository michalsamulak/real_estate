import React from "react";
import signUp from "../../lib/firebase/firebaseSignUpWithEmail";
import { useRouter } from "next/navigation";
import styles from "./auth.module.scss";

export const SignUp = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const router = useRouter();

    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== password2) return alert("Passwords do not match! Please try again.")

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/admin");
    };
    return (
        <div className={styles.left}>
            <h1 className={styles.header}>Sign up</h1>
            <form onSubmit={handleForm} className={styles.form}>
                <input
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    name="email"
                    placeholder="E-mail"
                />

                <input
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                />

                <input
                    className={styles.input}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    type="password"
                    name="password"
                    placeholder="Retype password"
                />

                <input
                    className={styles.input}
                    type="submit"
                    name="signup_submit"
                    value="Sign me up"
                />
            </form>
        </div>
    );
};

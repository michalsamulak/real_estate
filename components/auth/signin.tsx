'use client'
import React from "react";
import signIn from "../../lib/firebase/firebaseSignInMethod"
import { useRouter } from 'next/navigation'
import styles from "./auth.module.scss";


export const SignIn = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    
    const router = useRouter()

    const handleForm = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (
        <div className={styles.left}>
        <h1 className={styles.header}>Sign in</h1>
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
                type="submit"
                name="signin_submit"
                value="Sign In"
            />
        </form>
    </div>
        );
}



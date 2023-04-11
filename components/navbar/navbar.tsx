import { useContext, useEffect, useState } from "react";
import styles from "./navbar.module.scss";
const cln = require("classnames");

import Link from "next/link";
import { FirebaseAuthContext } from "../../lib/context";
import { logOutHandler } from "../../lib/firebase/firebaseSignInMethod";

const NavBar = () => {
    // const [scroll, setScroll] = useState(false);

    const userContext = useContext(FirebaseAuthContext);

    const isLoggedIn = userContext?.user !== null;

    const userAuthHandler = () => {
       if (isLoggedIn) {
            return (
                <div className={styles.wrapper}>
                    <ul className={styles.navItems}>
                        <Link href={"/"}>
                            <li
                                className={styles.navItem}
                                onClick={logOutHandler}
                            >
                                Sign&#8901;out
                            </li>
                        </Link>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className={styles.wrapper}>
                    <ul className={styles.navItems}>
                        <Link href={"/login"}>
                            <li className={styles.navItem}>Sign&#8901;in</li>
                        </Link>
                    </ul>
                    <ul className={styles.navItemsBtn}>
                        <Link href={"/join"}>
                            <li className={styles.navItemBtn}>
                                <button className={styles.button_join}>
                                    Join
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>
            );
        }
    };

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 50);
    //     });
    // }, []);

    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.navItems}>
                    <Link href={"/"}>
                        <li className={styles.navItem}>Home</li>
                    </Link>
                    <Link href={"/buy"}>
                        <li className={styles.navItem}>Buy</li>
                    </Link>
                    <Link href={"/sell"}>
                        <li className={styles.navItem}>Sell</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li className={styles.navItem}>Contact</li>
                    </Link>
                </ul>
            </div>
            {userAuthHandler()}
        </div>
    );
};

export default NavBar;

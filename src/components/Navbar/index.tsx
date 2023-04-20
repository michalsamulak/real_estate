import styles from "./navbar.module.scss";

import Link from "next/link";
import { useAuthContext } from "../../contexts/AuthContext";
import { logOutHandler } from "../../lib/firebase/firebaseSignInMethod";

// const navLinks = [{label: "Home", href: "/"}]

// navbar -> Navbar

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Buy", href: "/buy" },
    { label: "Sell", href: "/sell" },
    { label: "Contact", href: "/contact" },
];

const NavBar = () => {
    const userContext = useAuthContext();

    const isLoggedIn = userContext.user !== null;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.navItems}>
                    {navLinks.map((link, i) => (
                        <Link href={link.href} key={i}>
                            <li className={styles.navItem}>{link.label}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            {isLoggedIn ? (
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
            ) : (
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
            )}
            {/* {userAuthHandler()} */}
        </div>
    );
};

export default NavBar;

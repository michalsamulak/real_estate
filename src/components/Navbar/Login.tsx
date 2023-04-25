import Link from "next/link";
import styles from "./styles.module.scss";
import { useAuthContext } from "@/contexts/AuthContext";
import { logOutHandler } from "@/lib/firebase/firebaseSignInMethod";

export const LoginButton = () => {
    const userContext = useAuthContext();

    const isLoggedIn = userContext.user !== null;
    return (
        <>
            {isLoggedIn ? (
                <div className={styles.wrapper}>
                    <ul className={styles.navItems}>
                        <Link href={"/listed"}>
                            <li className={styles.navItem}>my&#160;listings</li>
                        </Link>
                        <Link href={"/"}>
                            <li
                                className={styles.navItem}
                                onClick={logOutHandler}
                            >
                                Sign&#160;out
                            </li>
                        </Link>
                    </ul>
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <ul className={styles.navItems}>
                        <Link href={"/login"}>
                            <li className={styles.navItem}>Sign&#160;in</li>
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
        </>
    );
    // if (isLoggedIn) {
    //   return (
    //     <Link href={"/"}>
    //       <li className={styles.navItem} onClick={logOutHandler}>
    //         Sign&#8901;out
    //       </li>
    //     </Link>
    //   );
    // } else {
    //   return (
    //     <>
    //       <Link href={"/login"}>
    //         <li className={styles.navItem}>Sign&#8901;in</li>
    //       </Link>
    //       <Link href={"/join"}>
    //         <li className={styles.navItemBtn}>
    //           <button className={styles.button_join}>Join</button>
    //         </li>
    //       </Link>
    //     </>
    //   );
    // }
};

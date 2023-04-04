
import styles from "./navbar.module.css";


import Link from "next/link";


const NavBar = () => {
 

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
       

        <ul className={styles.navItems}>
            <Link href={'/'} >
          <li className={styles.navItem} >
            Home
          </li>
            </Link>
            <Link href={'/buy'} >
          <li className={styles.navItem} >
            Buy
          </li>
            </Link>
            <Link href={'/sell'}>
          <li className={styles.navItem} >
            Sell
          </li>
            </Link>
        </ul>
        <nav className={styles.navContainer}>
          
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

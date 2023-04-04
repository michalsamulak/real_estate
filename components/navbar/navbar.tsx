
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
const cln = require('classnames');

import Link from "next/link";



const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);


  return (
      <div className={cln(styles.container, `${scroll ? styles.scroll : ''}`)}>
   
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
            <Link href={'/sell'}>
          <li className={styles.navItem} >
            Contact
          </li>
            </Link>
        </ul>

      </div>
      <div className={styles.wrapper}>
      <ul className={styles.navItems}>
            <Link href={'/'} >
          <li className={styles.navItem} >
            User
          </li>
            </Link>
</ul>
      </div>
    </div>
       
  );
};

export default NavBar;

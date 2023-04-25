import Link from "next/link";
import styles from "./styles.module.scss";

import { LoginButton } from "./Login";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
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

      <LoginButton />
    </div>
  );
};

export default NavBar;

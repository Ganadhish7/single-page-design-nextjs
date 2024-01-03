import Link from "next/link";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.desktopNav}`}>
        <div>
          <Link className={styles.logo} href="/">
            <span></span>
          </Link>
        </div>
        <Link className={styles.homelink} href="/">
          Home
        </Link>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            About Us
          </Link>
          <Link className={styles.link} href="/">
            Work
          </Link>
          <Link className={styles.link} href="/">
            Services
          </Link>
          <Link className={styles.link} href="/">
            Clients
          </Link>
          <Link className={styles.link} href="/">
            Team
          </Link>
          <Link className={styles.link} href="/">
            Contact Us
          </Link>
        </div>
      </nav>
      <MobileMenu />
    </header>
  );
}

export default Header;

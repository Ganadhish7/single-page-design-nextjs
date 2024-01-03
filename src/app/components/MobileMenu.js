import styles from "./MobileMenu.module.css";

function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}

export default MobileMenu;

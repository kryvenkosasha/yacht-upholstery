import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="">
          <img src="" alt="logo" />
        </a>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#hero">Strona główna</a>
          </li>
          <li>
            <a href="#description">O nas</a>
          </li>
          <li>
            <a href="#works">Nasze prace</a>
          </li>
          <li>
            <a href="#reviews">Opinie</a>
          </li>
          <li>
            <a href="#footer">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

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
          <li className={styles.navItem}>
            <NavLink to="/">Strona główna</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/oferta">Oferta</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/roboty">Nasze roboty</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

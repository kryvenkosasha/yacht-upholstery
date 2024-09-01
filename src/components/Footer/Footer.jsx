import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" role="contentinfo" className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <div className={styles.aboutUs}>
            <p>
              Jesteśmy firmą specjalizującą się w tapicerce luksusowych jachtów
              i samochodów. Oferujemy najwyższą jakość usług oraz dbałość o
              każdy szczegół.
            </p>
          </div>
          <nav className={styles.navigation}>
            <h3>Navigacja</h3>
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
          <div className={styles.contacts}>
            <h3>Kontakt</h3>
            <p>Email: info@tapicerka-jachtow-samochodow.pl</p>
            <p>Telefon: +48 123 456 789</p>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2202.8654573369345!2d20.946591776185112!3d52.402225444943205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb8124bfefe5f%3A0xd6197dd03aec351c!2sAVIOTEX!5e1!3m2!1sru!2spl!4v1725184226253!5m2!1sru!2spl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <p>
            &copy; 2024 Tapicerka Jachtów i Samochodów. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

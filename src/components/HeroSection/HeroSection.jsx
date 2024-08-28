import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Sekcja hero" role="banner" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Twoja Jacht i Samochód Zasługują na Najlepsze</h1>
        <p className={styles.heroDesc}>
          Usługi tapicerskie premium dla jachtów i samochodów,<br /> oferujące
          niezrównaną jakość i rzemiosło.
        </p>
        <a href="#description" className={styles.heroBtn}>
          Dowiedz się więcej
        </a>
      </div>
    </section>
  );
};

import fotelsWorks from "../../data/works/fotels.js";
import styles from "./FotelsImages.module.css";

export default function YachtImages() {
  return (
    <section className={styles.section}>
      <h3>Fotele</h3>
      <p>
        Oferujemy usługi tapicerskie dla różnych typów foteli, od klasycznych
        modeli po nowoczesne projekty. Nasze prace są wynikiem starannej
        renowacji oraz dbałości o estetykę, co sprawia, że każdy fotel odzyskuje
        swój dawny blask lub zyskuje nowy, unikalny wygląd.
      </p>
      <ul className={styles.imagesList}>
        {fotelsWorks.map((yacht) => (
          <li className={styles.imagesItem} key={yacht.id}>
            <img
              className={styles.image}
              src={yacht.image}
              alt={`Yacht ${yacht.id}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

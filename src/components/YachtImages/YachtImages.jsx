import yachtsWorks from "../../data/works/yachts.js";
import styles from "./YachtImages.module.css";

export default function YachtImages() {
  return (
    <section className={styles.section}>
      <h3>Jachty</h3>
      <p>
        Nasza firma specjalizuje się w kompleksowej tapicerce jachtów. Z dumą
        przedstawiamy nasze projekty, które podkreślają luksus i funkcjonalność
        wnętrz morskich pojazdów. Przykładamy szczególną wagę do detali i
        używamy tylko najwyższej jakości materiałów, aby zapewnić komfort i
        trwałość.
      </p>
      <ul className={styles.imagesList}>
        {yachtsWorks.map((yacht) => (
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

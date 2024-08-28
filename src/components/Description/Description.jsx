import styles from "./Description.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Description() {
  return (
    <section
      id="description"
      className={styles.description}
      aria-labelledby="why-us-heading"
    >
      <div className={styles.descriptionTitleDiv}>
        <h3 id="why-us-heading" className={styles.descTitle}>
          Dlaczego my
        </h3>
      </div>
      <ul className={styles.descList}>
        <li className={styles.descItem}>
          <h4 className={styles.descItemTitle}>Najwyższa jakość</h4>
          <p>
            Nasze usługi tapicerskie wykonujemy z najwyższą starannością,
            używając tylko najlepszych materiałów. Gwarantujemy trwałość i
            elegancję, która przetrwa lata.
          </p>
          <a href="" className={styles.descItemBtn}>
            Więcej <HiOutlineArrowLongRight size="25px" />
          </a>
        </li>

        <li className={styles.descItem}>
          <h4 className={styles.descItemTitle}>Indywidualne podejście</h4>
          <p>
            Każdy projekt jest dla nas wyjątkowy. Dostosowujemy nasze usługi do
            Twoich potrzeb, aby zapewnić pełną satysfakcję i idealne dopasowanie
            do Twojego stylu.
          </p>
          <a href="" className={styles.descItemBtn}>
            Więcej <HiOutlineArrowLongRight size="25px" />
          </a>
        </li>

        <li className={styles.descItem}>
          <h4 className={styles.descItemTitle}>
            Doświadczenie i profesjonalizm
          </h4>
          <p>
            Nasza ekipa to wykwalifikowani specjaliści z wieloletnim
            doświadczeniem w branży. Możesz być pewny, że Twoje zlecenie jest w
            dobrych rękach.
          </p>
          <a href="" className={styles.descItemBtn}>
            Więcej <HiOutlineArrowLongRight size="25px" />
          </a>
        </li>
      </ul>
    </section>
  );
}

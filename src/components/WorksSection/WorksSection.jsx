import image1 from "../../images/Marek/yacht fotel 1.jpg";
import image2 from "../../images/Marek/car fotel 2.jpg";
import image3 from "../../images/Marek/pillow.jpg";
import image4 from "../../images/Marek/seats 5.jpg";

import { GoStarFill } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import styles from "./WorksSection.module.css";

export default function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className={styles.worksSection}
    >
      <div className={styles.container}>
        <h3 id="works-heading" className={styles.worksTitle}>
          Nasze prace
        </h3>
        <ul className={styles.worksList}>
          <li className={styles.worksItem}>
            <img src={image1} alt="" />
            <p>Kompleksowe wnętrze jachtu</p>
            <div className={styles.stars}>
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
            </div>
          </li>

          <li className={styles.worksItem}>
            <img src={image2} alt="" />
            <p>Luksusowe fotele samochodowe</p>
            <div className={styles.stars}>
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
            </div>
          </li>

          <li className={styles.worksItem}>
            <img src={image3} alt="" />
            <p>Zamówione poduszki jachtowe</p>
            <div className={styles.stars}>
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
            </div>
          </li>

          <li className={styles.worksItem}>
            <img src={image4} alt="" />
            <p>Współpraca z Yamaha</p>
            <div className={styles.stars}>
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
              <GoStarFill color="#e58411" />
            </div>
          </li>
        </ul>
        <a href="" className={styles.moreBtn}>
          Więcej <HiOutlineArrowLongRight />
        </a>
      </div>
    </section>
  );
}

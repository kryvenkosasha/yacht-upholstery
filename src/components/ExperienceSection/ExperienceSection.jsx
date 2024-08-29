import image1 from "../../images/yacht.jpg";
import image2 from "../../images/old-seat.jpg";
import image3 from "../../images/leather.jpg";
import image4 from "../../images/materials.jpg";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceImage}>
          <img src={image1} alt="" />
        </div>
        <div className={styles.experienceText}>
          <h5>DOŚWIADCZENIE</h5>
          <h3>Zapewniamy Najlepsze Doświadczenie</h3>
          <p>
            Nie musisz się martwić o najmniejsze szczegóły, ponieważ wszyscy
            nasi specjaliści to profesjonaliści w swoich dziedzinach, którzy z
            pasją i zaangażowaniem pracują z najlepszymi materiałami dostępnymi
            na rynku.
          </p>
          <a href="#more" className={styles.moreLink}>
            Więcej <HiOutlineArrowLongRight />
          </a>
        </div>
      </div>

      <div className={styles.materialsContent}>
        <div className={styles.materialsText}>
          <h5>MATERIAŁY</h5>
          <h3>Bardzo Poważne Materiały</h3>
          <p>
            Używamy tylko najwyższej jakości materiałów dostępnych na rynku,
            zapewniając wyjątkową trwałość i luksusowy wygląd, który przetrwa
            lata.
          </p>
          <a href="#more" className={styles.moreLink}>
            Więcej <HiOutlineArrowLongRight />
          </a>
        </div>
        <div className={styles.materialsImages}>
          <div>
            <img
              src={image2}
              alt="Material quality"
              className={styles.carImage}
            />
            <img
              src={image3}
              alt="Furniture materials"
              className={styles.leatherImage}
            />
          </div>
          <img src={image4} alt="" className={styles.materialsImage} />
        </div>
      </div>
    </section>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./ReviewsSection.module.css";

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      name: "Jan K.",
      review:
        "Niesamowita praca! Mój jacht wygląda jak nowy dzięki ich niesamowitej dbałości o szczegóły.",
      grade: 5,
    },
    {
      name: "Sara M.",
      review:
        "Materiały najwyższej jakości i bezbłędne wykonanie. Mój samochód nigdy nie wyglądał lepiej!",
      grade: 5,
    },
    {
      name: "Michał B.",
      review:
        "Profesjonalna i niezawodna obsługa. Gorąco polecam każdemu, kto szuka tapicerki premium.",
      grade: 4,
    },
    {
      name: "Anna W.",
      review:
        "Ekipa tapicerska jest naprawdę utalentowana. Moje wnętrze samochodu jest teraz eleganckie i wyjątkowo wygodne.",
      grade: 5,
    },
    {
      name: "Tomasz R.",
      review:
        "Doskonała komunikacja i szybka realizacja. Efekt końcowy przekroczył moje oczekiwania!",
      grade: 4,
    },
    {
      name: "Ewa L.",
      review:
        "Bardzo profesjonalne podejście i dbałość o każdy szczegół. Tapicerka mojego jachtu wygląda luksusowo.",
      grade: 5,
    },
  ];

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className={styles.section}
    >
      <h3 id="reviews-heading" className={styles.reviewsTitle}>
        Opinie klientów
      </h3>
      <Slider {...settings} className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewsItem}>
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

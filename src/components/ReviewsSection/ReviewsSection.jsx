import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoStarFill } from "react-icons/go";

import image1 from "../../images/Marek/yacht 7.jpg";
import image2 from "../../images/Marek/fotel 4.jpg";
import image3 from "../../images/Marek/pillow 3.jpg";
import image4 from "../../images/Marek/car2.jpg";
import image5 from "../../images/Marek/yacht 4.jpg";
import image6 from "../../images/Marek/yacht 14.jpg";

import reviewerImage1 from "../../images/reviews/reviewerM.jpg";
import reviewerImage2 from "../../images/reviews/reviewerW.jpg";
import reviewerImage3 from "../../images/reviews/reviewerM2.jpg";
import reviewerImage4 from "../../images/reviews/reviewerW2.jpg";
import reviewerImage5 from "../../images/reviews/reviewerM3.jpg";
import reviewerImage6 from "../../images/reviews/reviewerW3.jpg";

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
    responsive: [
      {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Jan K.",
      review:
        "Niesamowita praca! Mój jacht wygląda jak nowy dzięki ich niesamowitej dbałości o szczegóły.",
      grade: 5,
      image: image1,
      reviewerImage: reviewerImage1,
    },
    {
      name: "Sara M.",
      review:
        "Materiały najwyższej jakości i bezbłędne wykonanie. Mój samochód nigdy nie wyglądał lepiej!",
      grade: 5,
      image: image2,
      reviewerImage: reviewerImage2,
    },
    {
      name: "Michał B.",
      review:
        "Profesjonalna i niezawodna obsługa. Gorąco polecam każdemu, kto szuka tapicerki premium.",
      grade: 4,
      image: image3,
      reviewerImage: reviewerImage3,
    },
    {
      name: "Anna W.",
      review:
        "Ekipa tapicerska jest naprawdę utalentowana. Moje wnętrze samochodu jest teraz eleganckie i wyjątkowo wygodne.",
      grade: 5,
      image: image4,
      reviewerImage: reviewerImage4,
    },
    {
      name: "Tomasz R.",
      review:
        "Doskonała komunikacja i szybka realizacja. Efekt końcowy przekroczył moje oczekiwania!",
      grade: 4,
      image: image5,
      reviewerImage: reviewerImage5,
    },
    {
      name: "Ewa L.",
      review:
        "Bardzo profesjonalne podejście i dbałość o każdy szczegół. Tapicerka mojego jachtu wygląda luksusowo.",
      grade: 5,
      image: image6,
      reviewerImage: reviewerImage6,
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
            <div className={styles.imageContainer}>
              <img src={review.image} alt="" />
            </div>
            <div className={styles.reviewContainer}>
              <div className={styles.review}>
                <div className={styles.reviewerImgContainer}>
                  <img src={review.reviewerImage} alt="" />
                </div>
                <h4>{review.name}</h4>
                <p>{review.review}</p>
                <div className={styles.reviewGrade}>
                  {Array.from({ length: review.grade }).map((_, i) => (
                    <GoStarFill key={i} color="#e58411" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { reviews } from "../../data/reviews/reviews";

import { GoStarFill } from "react-icons/go";



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

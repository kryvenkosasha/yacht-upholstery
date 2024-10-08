import Description from "../../components/Description/Description";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Reviews from "../../components/ReviewsSection/ReviewsSection";
import Works from "../../components/WorksSection/WorksSection";

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.hero}>
        <Header />
        <HeroSection />
      </div>
      <Description />
      <ExperienceSection />
      <Works />
      <Reviews />
      <Footer />
    </>
  );
}

export default HomePage;

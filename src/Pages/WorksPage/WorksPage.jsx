import React, { useState, Suspense } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from './WorksPage.module.css'

const YachtImages = React.lazy(() =>
  import("../../components/YachtImages/YachtImages")
);

const FotelsImages = React.lazy(() =>
  import("../../components/FotelsImages/FotelsImages")
);

export default function Works() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <h2 className={styles.pageTitle}>Nasze pracy</h2>
      <Suspense fallback={<h4>Ładowanie...</h4>}>
        <YachtImages />
        <FotelsImages />
        <Footer />
      </Suspense>
    </div>
  );
}

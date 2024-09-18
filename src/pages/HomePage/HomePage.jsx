import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.homeSection}>
      <NavBar />
      <div className={styles.homeContainer}>
        <h1>¡Welcome!</h1>
      </div>
    </section>
  );
};

export default HomePage;

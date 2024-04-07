import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Name</h3>
              <p>
              Welcome to my portfolio. My name is Brandon Wang and I am 15 years old. I want to major computer science in the future.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Experience</h3>
              <p>
                I have been to robotic competitions for 2 years being co-captain. I've also attened many coding competitions and cyber security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Family</h3>
              <p>
                I have a sister, a mom and a dad, and also a cat named Mickey
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

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
              <h3>Highschool Student</h3>
              <p>
              I go to school at Walnut High School and will probably major 
              Computer Science in the future.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>School</h3>
              <p>
                I have outside classes where I learn calculus, physics 2, java coding, and data science.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Skills/Hobbies</h3>
              <p>
              I like running, playing basketball, and biking. I occassionaly play video games when I have time, and I also play piano.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

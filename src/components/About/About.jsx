import React from "react";
import { useTheme } from "../ThemeSelect.jsx";
import styles from "./About.module.css";
import techstack from "../../data/techstack.json";
import { getImageUrl } from "../../utils";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export const About = () => {
  // use different image for dark and light mode
  const { theme } = useTheme();
  const imageUrl = theme === "light" ? "aboutMelight.png" : "aboutMedark.png";

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <h2>About me</h2>
        <hr></hr>
        <div className={styles.aboutContent}>
          <img
            className={styles.aboutMepic}
            src={getImageUrl(imageUrl)}
            alt="me sitting with a laptop"
            data-aos="fade-right"
          />

          <div
            className={styles.category}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h4 className={styles.webdev}>Web Development</h4>

            {/* map items on techstack.json to get images*/}
            <div className={styles.tools}>
              {techstack.map((techstack, id) => {
                return (
                  <div key={id} className={styles.tool}>
                    <div className={styles.toolsContainer}>
                      <img
                        src={getImageUrl(techstack.imageSrc)}
                        alt={techstack.title}
                        className={styles.toolsLogo}
                      />
                    </div>
                    <p>{techstack.title}</p>
                  </div>
                );
              })}
            </div>

            <p className={styles.aboutWeb}>
              I have been self-studying WebDev through YouTube, freeCodeCamp,
              and other free online materials. WebDev is not part of my course
              curriculum, however my interest started upon developing a
              web-based pharmacy management system for our thesis using HTML,
              CSS, JS, PHP, and MySQL. I am recently studying React, and with
              that, I developed this portfolio with React.
            </p>
          </div>
        </div>

        {/* education */}
        <h4 className={styles.educ}>Education & Certifications</h4>

        <div className={styles.educIcon}>
          <div className={styles.aboutEduc} data-aos="flip-left">
            {/* education component */}
            <Education
              schoolYear="Tertiary Educ: 2019 - 2024"
              schoolName="Batangas State University, TNEU"
              courseTrack="Bachelor of Science in Computer Engineering"
            />

            <Education
              schoolYear="Secondary Educ: 2017 - 2019"
              schoolName="Batangas College of Arts and Sciences, Inc."
              courseTrack="Science, Technology, Engineering, and Mathematics"
            />
          </div>

          {/* certifications */}
          <div className={styles.aboutEduc} data-aos="flip-right">
            <Certifications
              dateYear="Certification: February 2024"
              orgCertification="Responsive Web Design (freeCodeCamp)"
              certCredentials="https://www.freecodecamp.org/certification/marliaren/responsive-web-design"
            />

            <Certifications
              dateYear="Certification: February 2024"
              orgCertification="Digital Skills: User Experience (Accenture)"
              certCredentials="https://www.futurelearn.com/certificates/dcc6e3q"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

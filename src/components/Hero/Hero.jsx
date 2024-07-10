import React from "react";
import { useTheme } from "../ThemeSelect.jsx";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import SocialLinks from "../SocialLinks";

export const Hero = () => {
  // use different image for dark and light mode
  const { theme } = useTheme();
  const imageUrl = theme === "light" ? "gradpic.JPG" : "mypic.JPG";

  return (
    <section className={styles.container} id="hero" data-aos="zoom-in-up">
      <div className={styles.content}>
        <h1 className={styles.intro}>
          Hi, I'm
          <span className={styles.introName}>Margot Giulia.</span>
        </h1>
        <p className={styles.introParag}>
          I'm a recent graduate of BS in Computer Engineering, aspiring to be a
          professional Full-Stack Web Developer. Hit me up for commissions!
        </p>

        {/* social links component to get socials*/}
        <SocialLinks
          containerClassName={styles.socialLinks}
          circleClassName={styles.socialLinksCircle}
          connectBtnClassName={styles.connectBtn}
        />
      </div>

      <img
        className={styles.myImage}
        src={getImageUrl(imageUrl)}
        alt="my grad picture"
      />

      {/* <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div> */}
    </section>
  );
};

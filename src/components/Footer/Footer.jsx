import React from "react";
import styles from "./Footer.module.css";
import SocialLinks from "../SocialLinks";

export const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.creditsPart}>
        <span className={styles.credits}>
          <span className={styles.marliaren}>© marliaren 2024</span> | Icons by
          Icons8 & Bootstrap Icons
        </span>

        {/* social links component to get socials*/}
        <SocialLinks
          containerClassName={styles.socialLinks}
          circleClassName={styles.socialLinksCircle}
          connectBtnClassName={styles.connectBtn}
        />
      </div>
    </section>
  );
};

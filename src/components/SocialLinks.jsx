import React from "react";
import socialLinks from "../data/socialLinks.json";

// create socialLinks component so that it can be used on both hero and footer. no css here since there are some differences in styling for hero / footer
const SocialLinks = ({
  containerClassName,
  circleClassName,
  connectBtnClassName,
}) => {
  return (
    //map the socials from socialLinks json
    <div className={containerClassName}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className={`${circleClassName} ${link.social}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d={link.svgPath} />
          </svg>
        </a>
      ))}

      <a href="mailto:delmundogiulia@gmail.com" className={connectBtnClassName}>
        Email me
      </a>
    </div>
  );
};

export default SocialLinks;

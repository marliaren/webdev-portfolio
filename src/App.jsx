import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css"; //animate on scroll
import { ThemeSelect, useTheme } from "./components/ThemeSelect";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  // for animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <ThemeSelect>
      <Router>
        <AppContent />
      </Router>
    </ThemeSelect>
  );
};

const AppContent = () => {
  // for dark/light mode/theme
  const { theme } = useTheme();
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // for active link in Navbar
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  // active navlink based on section clicked
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // active navlink upon scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, //for better accuracy
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.App}>
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

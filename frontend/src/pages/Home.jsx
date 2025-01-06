import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import aboutImg from "../assets/resume.png";
import picone from "../assets/5.png"
import pictwo from "../assets/6.png"
import picthree from "../assets/7.png"
import Custom1 from "../assets/CustomTemplate2.png"
import Custom4 from "../assets/CustomTemplate4.png"
import Custom5 from "../assets/CustomTemplate5.png"
import Custom6 from "../assets/CustomTemplate6.png"
const Home = () => {
  const [navigationActive, setNavigationActive] = useState(false);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector(`.${styles.about}`);
      const services = document.querySelector(`.${styles.services}`);
      const portfolio = document.querySelector(`.${styles.portfolio}`);
      const data = document.querySelector(`.${styles.data}`);
      const nums = document.querySelectorAll(`.${styles.num}`);

      if (window.pageYOffset >= 200) {
        about.classList.add(styles.change);
      } else {
        about.classList.remove(styles.change);
      }

      if (window.pageYOffset >= about.offsetTop + 200) {
        services.classList.add(styles.change);
      } else {
        services.classList.remove(styles.change);
      }

      if (window.pageYOffset >= services.offsetTop) {
        portfolio.classList.add(styles.change);
      } else {
        portfolio.classList.remove(styles.change);
      }

      if (window.scrollY >= data.offsetTop - 300) {
        if (!startCounting) {
          nums.forEach((num) => startCount(num));
        }
        setStartCounting(true);
      }
    };

    const startCount = (el) => {
      let max = el.dataset.val;
      let current = 0;
      const interval = setInterval(() => {
        current++;
        el.textContent = current;
        if (current === parseInt(max)) {
          clearInterval(interval);
        }
      }, 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCounting]);

  return (
    <div className={styles.container}>
      <div className={`${styles.rectangle} ${styles.rectangle1}`}></div>
      <div className={`${styles.rectangle} ${styles.rectangle2}`}></div>

      {/* Landing Section */}
      <section className={styles.landing}>
  <div className={styles.curtain}></div> {/* Curtain overlay */}
  <div className={styles.banner}>
    <div className={`${styles.headingSlide} ${styles.headingSlide1}`}>
      <h3>Welcome to</h3>
      <h1>Nextfolio</h1>
    </div>
  </div>
</section>


      {/* About Section */}
      {/* About Section */}
<section className={styles.about}>
  <div className={styles.aboutLeft}>
    <img src={Custom1} alt="About" />
  </div>
  <div className={styles.aboutRight}>
    <h1>About Us</h1>
    <h3>Your Portfolio, Your Style</h3>
    <div className={styles.info}>
      <ul>
        <li>We specialize in creating custom portfolio websites for creative professionals.</li>
        <li>Whether you're a designer, photographer, or artist, we help you showcase your work in a stunning and personalized way.</li>
        <li>Our platform allows you to build a portfolio that reflects your unique style and expertise.</li>
        <li>We offer personalized themes, responsive layouts, and an easy-to-use drag-and-drop builder.</li>
        <li>Our goal is to help you present your work professionally and beautifully.</li>
      </ul>
      <div className={styles.socialMedia}>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
      <h4>Contact us here:</h4>
      <span>Email: <a href="#">contact@portfoliomaker.com</a></span>
      <span>Phone: <a href="#">000 (123) 456 7890</a></span>
    </div>
  </div>
</section>


      {/* Services Section */}
      {/* Services Section */}
<section className={styles.services}>
  <div className={styles.servicesHeader}>
    <h3>What I do</h3>
    <h1>My Services</h1>
  </div>
  <div className={styles.servicesList}>
    <div className={styles.listItem}>
      <i className="fa-solid fa-layer-group"></i> <br />
      <span>Web Design</span>
      <span>UI/UX Design</span>
      <span>Responsive Layout</span>
    </div>
    <div className={styles.listItem}>
      <i className="fa-solid fa-pen-nib"></i> <br />
      <span>Graphic Design</span>
      <span>Brand Identity</span>
      <span>Social Media Design</span>
    </div>
    <div className={styles.listItem}>
      <i className="fa-sharp fa-solid fa-cogs"></i> <br />
      <span>Web Development</span>
      <span>Frontend & Backend</span>
      <span>API Integration</span>
    </div>
    <div className={styles.listItem}>
      <i className="fa-solid fa-camera"></i>
      <span>Photography</span>
      <span>Product Photography</span>
      <span>Event Photography</span>
    </div>
    <div className={styles.listItem}>
      <i className="fa-solid fa-bullhorn"></i> <br />
      <span>Marketing</span>
      <span>SEO Services</span>
      <span>Campaign Management</span>
    </div>
    <div className={styles.listItem}>
      <i className="fa-solid fa-paint-brush"></i> <br />
      <span>Creative Direction</span>
      <span>Art Direction</span>
      <span>Brand Strategy</span>
    </div>
  </div>
</section>


      {/* Portfolio Section */}
      <section className={styles.portfolio}>
  <div className={styles.portfolioHeader}>
    <h3>Our Work</h3>
    <h1>Explore Our Templates</h1>
  </div>
  <div className={styles.works}>
    {[Custom1, Custom4, Custom5, Custom6].map((img, index) => {
      // Template details (name and description)
      const templates = [
        { name: "Cope", description: "An elegant resume-style portfolio template designed for showcasing your career highlights and professional achievements." },
        { name: "Coffee Beige", description: "A minimalist template with a focus on clean design, perfect for modern creative professionals." },
        { name: "Toronto", description: "A vibrant, dynamic layout ideal for photographers and designers looking to make their work stand out." },
        { name: "Vibrant Blue", description: "A sleek, highly customizable portfolio template suitable for any creative industry." }
      ];
      return (
        <div
          key={index}
          className={`${styles.work} ${index % 2 === 0 ? styles.workLeft : styles.workRight}`}
        >
          <img src={img} alt={`Work ${index + 1}`} />
          <div className={styles.workInfo}>
           
            <h1>{templates[index].name}</h1> {/* Template Name */}
            <p>{templates[index].description}</p>
            <a href="#">Template</a>
          </div>
        </div>
      );
    })}
  </div>
</section>


    

      {/* Achievements Section */}
      <section className={styles.data}>
        <div className={styles.dataHeader}>
          <h3>Achievements</h3>
          <h1>Our Impact</h1>
        </div>
        <div className={styles.dataList}>
          <div className={styles.dataItem}>
            <span>Clients</span>
            <span className={styles.num} data-val="500">
              0
            </span>
          </div>
          <div className={styles.dataItem}>
            <span>Portfolios Created</span>
            <span className={styles.num} data-val="1000">
              0
            </span>
          </div>
          <div className={styles.dataItem}>
            <span>Happy Users</span>
            <span className={styles.num} data-val="750">
              0
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerSocialMedia}>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <h1>Contact Us</h1>
        <a href="#">contact@portfoliomaker.com</a>
        <p className={styles.copyright}>
          Copyright &copy; 2023. All Rights Reserved | Made By
          <span> Code And Create</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;

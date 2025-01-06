import React from "react";
import styles from "./Template5.module.css"; // Import the CSS module

const Template5 = ({
  name,
  skills,
  education,
  about,
  workExperience,
  projects,
  contact,
  hobby,
}) => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.contentWrapper}>
        {/* Left Section: Personal Info, Education, Skills, About */}
        <div className={styles.sectionLeft}>
          <h1 className={styles.name}>{name}</h1>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>About Me</h3>
            <p className={styles.text}>{about}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Education</h3>
            <p className={styles.text}>{education}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Skills</h3>
            <ul className={styles.skillList}>
              {skills.map((skill, index) => (
                <li key={index} className={styles.text}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Work Experience, Projects, Contact, Hobbies */}
        <div className={styles.sectionRight}>
          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Work Experience</h3>
            <p className={styles.text}>{workExperience}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Projects</h3>
            <ul className={styles.projectList}>
              {projects.map((project, index) => (
                <li key={index} className={styles.text}>
                  <strong>{project.projectname}:</strong>{" "}
                  <a
                    href={project.projectlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {project.projectlink}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Contact</h3>
            <p className={styles.text}><i className={`fas fa-envelope ${styles.icon}`}></i> {contact.email}</p>
            <p className={styles.text}><i className={`fab fa-github ${styles.icon}`}></i> {contact.github}</p>
            <p className={styles.text}> <i className={`fab fa-linkedin ${styles.icon}`}></i> {contact.linkedIn}</p>
          </div>

          <div className={styles.subSection}>
            <h3 className={styles.subHeader}>Hobbies</h3>
            <p className={styles.text}>{hobby}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;

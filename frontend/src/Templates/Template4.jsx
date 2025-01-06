import React from "react";
import styles from "./Template4.module.css";

const Template4 = ({
  name,
  profileImage,
  contact,
  about,
  education,
  skills,
  workExperience,
  projects,
  hobby,
}) => {
  return (
    <div className={styles.templateContainer}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <img src={profileImage} alt={`${name}`} className={styles.profileImage} />
          <h1 className={styles.name}>{name}</h1>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <ul className={styles.contactList}>
            {contact.email && (
              <li>
                <i className={`fas fa-envelope ${styles.icon}`}></i> {contact.email}
              </li>
            )}
            {contact.github && (
              <li>
                <i className={`fab fa-github ${styles.icon}`}></i> {contact.github}
              </li>
            )}
            {contact.linkedIn && (
              <li>
                <i className={`fab fa-linkedin ${styles.icon}`}></i> {contact.linkedIn}
              </li>
            )}
            {contact.twitter && (
              <li>
                <i className={`fab fa-twitter ${styles.icon}`}></i> {contact.twitter}
              </li>
            )}
          </ul>
        </div>

        {/* Hobbies Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Hobbies</h3>
          <p>{hobby}</p>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rightColumn}>
        {/* About Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p>{about}</p>
        </div>

        {/* Education Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <p>{education}</p>
        </div>

        {/* Skills Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <ul className={styles.skillList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <p>{workExperience}</p>
        </div>

        {/* Projects Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          <ul className={styles.projectList}>
            {projects.map((project, index) => (
              <li key={index}>
                <strong>{project.projectname}:</strong>{" "}
                <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                  {project.projectlink}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template4;

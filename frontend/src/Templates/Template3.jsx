import React from "react";
import styles from "./Template3.module.css";

const Template3 = ({
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
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        {/* Profile Image */}
        <div className={styles.profileContainer}>
          {profileImage && <img src={profileImage} alt="Profile" className={styles.profileImage} />}
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>Contact Me</p>
        </div>

        {/* Contact */}
        <div className={styles.section}>
          <h2>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <i className="fas fa-envelope"></i> {contact.email}
            </li>
            <li>
              <i className="fab fa-github"></i> {contact.github}
            </li>
            <li>
              <i className="fab fa-twitter"></i> {contact.twitter}
            </li>
            <li>
              <i className="fab fa-linkedin"></i> {contact.linkedIn}
            </li>
          </ul>
        </div>

        {/* Awards */}
        <div className={styles.section}>
          <h2>Awards</h2>
          <ul>
            <li>2022 - Best Designer Award</li>
            <li>2021 - Excellence in UX</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* Profile */}
        <div className={styles.section}>
          <h2>Profile</h2>
          <p>{about}</p>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h2>Education</h2>
          <p>{education}</p>
        </div>

        {/* Key Skills */}
        <div className={styles.section}>
          <h2>Key Skills</h2>
          <ul>
            {skills && skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>

        {/* Work Experience */}
        <div className={styles.section}>
          <h2>Employment</h2>
          <ul>
            {workExperience &&
              workExperience.split("\n").map((work, index) => (
                <li key={index}>
                  <p>{work}</p>
                </li>
              ))}
          </ul>
        </div>

        {/* Projects */}
        <div className={styles.section}>
          <h2>Projects</h2>
          <ul>
            {projects &&
              projects.map((project, index) => (
                <li key={index} className={styles.projectItem}>
                  <strong>{project.projectname}</strong>{" "}
                  {project.projectlink && (
                    <a
                      href={project.projectlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      [View Project]
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>

        {/* Interests */}
        <div className={styles.section}>
          <h2>Interests</h2>
          <p>{hobby}</p>
        </div>
      </div>
    </div>
  );
};

export default Template3;

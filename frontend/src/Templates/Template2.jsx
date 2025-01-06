import React from 'react';
import styles from './Template2.module.css';

const Template2 = ({
  name,
  skills,
  education,
  about,
  workExperience,
  projects,
  contact,
  hobby,
  profileImage,
}) => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        {profileImage && <img src={profileImage} alt="Profile" className={styles.profileImage} />}
        <h1 className={styles.name}>{name || 'Your Name'}</h1>
        <div className={styles.section}>
          <h2>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <i className="fas fa-envelope"></i> {contact.email || 'your.email@example.com'}
            </li>
            <li>
              <i className="fab fa-github"></i>{" "}
              <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">
                {contact.github || 'github.com/yourprofile'}
              </a>
            </li>
            <li>
              <i className="fab fa-twitter"></i>{" "}
              <a href={`https://${contact.twitter}`} target="_blank" rel="noopener noreferrer">
                {contact.twitter || 'twitter.com/yourprofile'}
              </a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>{" "}
              <a href={`https://${contact.linkedIn}`} target="_blank" rel="noopener noreferrer">
                {contact.linkedIn || 'linkedin.com/in/yourprofile'}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Skills</h2>
          <ul>
            {skills.length > 0 ? (
              skills.map((skill, index) => <li key={index}>{skill.trim()}</li>)
            ) : (
              <li>No skills added yet</li>
            )}
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Hobbies</h2>
          <p>{hobby || 'Add your hobbies here.'}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.section}>
          <h2>About Me</h2>
          <p>{about || 'Write something about yourself here.'}</p>
        </div>
        <div className={styles.section}>
          <h2>Education</h2>
          <p>{education || 'Add your education details here.'}</p>
        </div>
        <div className={styles.section}>
          <h2>Work Experience</h2>
          <p>{workExperience || 'Describe your work experience here.'}</p>
        </div>
        <div className={styles.section}>
          <h2>Projects</h2>
          <ul>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <li key={index}>
                  <strong>{project.projectname}</strong>:{" "}
                  <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                    {project.projectlink}
                  </a>
                </li>
              ))
            ) : (
              <li>No projects added yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template2;

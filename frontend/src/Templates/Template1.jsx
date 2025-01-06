
{/*}
import React, { useState, useEffect } from 'react';
import styles from './Template1.module.css'; // Import the CSS module

const Template1 = ({
  name = '',
  skills = [],
  education = '',
  about = 'No information provided.',
  workExperience = '',
  projects = [],
  contact = {},
  hobby = 'Not specified.',
  isEditing = false, // To control if we're in edit mode
  onSave,
  onCancel,
}) => {
  const { email = 'Not provided', github = 'Not provided', linkedIn = 'Not provided' } = contact;

  const [editableName, setEditableName] = useState(name);
  const [editableSkills, setEditableSkills] = useState(skills);
  const [editableAbout, setEditableAbout] = useState(about);
  const [editableWorkExperience, setEditableWorkExperience] = useState(workExperience);
  const [editableProjects, setEditableProjects] = useState(projects);
  const [editableHobby, setEditableHobby] = useState(hobby);

  // Sync with updated props
  useEffect(() => {
    setEditableName(name);
    setEditableSkills(skills);
    setEditableAbout(about);
    setEditableWorkExperience(workExperience);
    setEditableProjects(projects);
    setEditableHobby(hobby);
  }, [name, skills, about, workExperience, projects, hobby]);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...editableSkills];
    updatedSkills[index] = value;
    setEditableSkills(updatedSkills);
  };

  const handleProjectChange = (index, key, value) => {
    const updatedProjects = [...editableProjects];
    updatedProjects[index] = { ...updatedProjects[index], [key]: value };
    setEditableProjects(updatedProjects);
  };

  return (
    <div className={styles.resume}>
      {/* Left Section 
      <div className={styles.resumeLeft}>
        {/* Profile Section 
        <div className={styles.resumeProfile}>
          <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
        </div>
        <div className={styles.resumeContent}>
          {/* Personal Information 
          <div className={`${styles.resumeItem} ${styles.resumeInfo}`}>
            <div className={styles.title}>
              <p className={styles.bold}>{editableName}</p>
              <p className={styles.regular}>Developer</p>
            </div>
            <ul>
              <li>
                <div className={styles.icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.data}>{email}</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <i className="fab fa-github"></i>
                </div>
                <div className={styles.data}>{github}</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className={styles.data}>{linkedIn}</div>
              </li>
            </ul>
          </div>

          {/* Skills Section 
          <div className={`${styles.resumeItem} ${styles.resumeSkills}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Skills</p>
            </div>
            <ul>
              {editableSkills.map((skill, index) => (
                <li key={index}>
                  <div className={styles.skillName}>{skill}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section 
      <div className={styles.resumeRight}>
        {/* About Section 
        <div className={`${styles.resumeItem} ${styles.resumeAbout}`}>
          <div className={styles.title}>
            <p className={styles.bold}>About Me</p>
          </div>
          <p>{editableAbout}</p>
        </div>

        {/* Work Experience Section 
        <div className={`${styles.resumeItem} ${styles.resumeWork}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Work Experience</p>
          </div>
          <ul>
            {editableWorkExperience.split('\n').map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>

        {/* Projects Section 
        <div className={`${styles.resumeItem} ${styles.resumeProjects}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Projects</p>
          </div>
          <ul>
            {editableProjects.map((project, index) => (
              <li key={index}>
                <div className={styles.projectTitle}>{project.projectname}</div>
                <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                  {project.projectlink}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hobbies Section 
        <div className={`${styles.resumeItem} ${styles.resumeHobby}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Hobbies</p>
          </div>
          <p>{editableHobby}</p>
        </div>
      </div>
    </div>
  );
};

export default Template1; */}



import React, { useState, useEffect } from 'react';
import styles from './Template1.module.css'; // Import the CSS module

const Template1 = ({
  name = '',
  skills = [],
  education = '',
  about = 'No information provided.',
  workExperience = '',
  projects = [],
  contact = {},
  hobby = 'Not specified.',
  isEditing = false, // To control if we're in edit mode
  onSave,
  onCancel,
  profileImage = null, // Added profileImage prop
}) => {
  const { email = 'Not provided', github = 'Not provided', linkedIn = 'Not provided' } = contact;

  const [editableName, setEditableName] = useState(name);
  const [editableSkills, setEditableSkills] = useState(skills);
  const [editableAbout, setEditableAbout] = useState(about);
  const [editableWorkExperience, setEditableWorkExperience] = useState(workExperience);
  const [editableProjects, setEditableProjects] = useState(projects);
  const [editableHobby, setEditableHobby] = useState(hobby);

  // Sync with updated props
  useEffect(() => {
    setEditableName(name);
    setEditableSkills(skills);
    setEditableAbout(about);
    setEditableWorkExperience(workExperience);
    setEditableProjects(projects);
    setEditableHobby(hobby);
  }, [name, skills, about, workExperience, projects, hobby]);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...editableSkills];
    updatedSkills[index] = value;
    setEditableSkills(updatedSkills);
  };

  const handleProjectChange = (index, key, value) => {
    const updatedProjects = [...editableProjects];
    updatedProjects[index] = { ...updatedProjects[index], [key]: value };
    setEditableProjects(updatedProjects);
  };

  return (
    <div className={styles.resume}>
      {/* Left Section */}
      <div className={styles.resumeLeft}>
        {/* Profile Section */}
        <div className={styles.resumeProfile}>
          <img
            src={profileImage || 'https://i.imgur.com/eCijVBe.png'} // Use uploaded profile image or fallback
            alt="profile_pic"
          />
        </div>
        <div className={styles.resumeContent}>
          {/* Personal Information */}
          <div className={`${styles.resumeItem} ${styles.resumeInfo}`}>
            <div className={styles.title}>
              <p className={styles.bold}>{editableName}</p>
              <p className={styles.regular}>Developer</p>
            </div>
            <ul>
              <li>
                <div className={styles.icon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.data}>{email}</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <i className="fab fa-github"></i>
                </div>
                <div className={styles.data}>{github}</div>
              </li>
              <li>
                <div className={styles.icon}>
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className={styles.data}>{linkedIn}</div>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className={`${styles.resumeItem} ${styles.resumeSkills}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Skills</p>
            </div>
            <ul>
              {editableSkills.map((skill, index) => (
                <li key={index}>
                  <div className={styles.skillName}>{skill}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.resumeRight}>
        {/* About Section */}
        <div className={`${styles.resumeItem} ${styles.resumeAbout}`}>
          <div className={styles.title}>
            <p className={styles.bold}>About Me</p>
          </div>
          <p>{editableAbout}</p>
        </div>

        {/* Work Experience Section */}
        <div className={`${styles.resumeItem} ${styles.resumeWork}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Work Experience</p>
          </div>
          <ul>
            {editableWorkExperience.split('\n').map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className={`${styles.resumeItem} ${styles.resumeProjects}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Projects</p>
          </div>
          <ul>
            {editableProjects.map((project, index) => (
              <li key={index}>
                <div className={styles.projectTitle}>{project.projectname}</div>
                <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                  {project.projectlink}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hobbies Section */}
        <div className={`${styles.resumeItem} ${styles.resumeHobby}`}>
          <div className={styles.title}>
            <p className={styles.bold}>Hobbies</p>
          </div>
          <p>{editableHobby}</p>
        </div>
      </div>
    </div>
  );
};

export default Template1;

import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import html2pdf from "html2pdf.js";
import styles from "./CustomTemplate5.module.css";

const CustomTemplate5 = ({ onSave, profileImage = null }) => {
  const templateRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    profession: "Front-End Developer",
    contact: {
      email: "john.doe@gmail.com",
      phone: "111-222-3333",
    },
    about:
      "I am a front-end developer with more than 3 years of experience writing HTML, CSS, and JS. I'm motivated, result-focused, and seeking a successful team-oriented company with an opportunity to grow.",
    experience: [
      {
        company: "KlowdBox",
        location: "San Francisco, CA",
        position: "Front-End Developer",
        duration: "Jan 2011 - Feb 2015",
        description: "Did this and that.",
      },
      {
        company: "Akount",
        location: "Santa Monica, CA",
        position: "Front-End Developer",
        duration: "Feb 2015 - Dec 2018",
        description: "Worked on various projects.",
      },
    ],
    education: [
      {
        institution: "Sample Institute of Technology",
        location: "San Francisco, CA",
        duration: "Jan 2007 - Dec 2011",
      },
    ],
    projects: [
      {
        name: "DSP",
        link: "/login",
      },
    ],
    skills: ["JavaScript", "CSS"],
    interests: "Football, Programming",
  });

  // Handle input changes for any simple data like name, profession, about
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle changes for nested sections like contact, experience, skills, etc.
  const handleNestedChange = (section, idx, key, value) => {
    if (section === "contact") {
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [key]: value,
        },
      }));
    } else if (section === "skills") {
      // For skills section, update the specific skill at the index
      const updatedSkills = [...formData.skills];
      updatedSkills[idx] = value;
      setFormData((prev) => ({
        ...prev,
        skills: updatedSkills,
      }));
    } else {
      const updatedSection = [...formData[section]];
      updatedSection[idx] = { ...updatedSection[idx], [key]: value };
      setFormData((prev) => ({ ...prev, [section]: updatedSection }));
    }
  };

  // Function to add a new item to a section (experience, skills, projects, etc.)
  const addNewItem = (section, newItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => setIsEditing((prev) => !prev);

  // Download the resume as PDF
  const downloadResumeAsPdf = () => {
    if (templateRef.current) {
      const opt = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(templateRef.current).set(opt).save();
    }
  };

  return (
    <>
      <div ref={templateRef} className={styles.container}>
        <div className={styles.header}>
          <div className={styles.fullName}>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            ) : (
              <h1>{formData.name}</h1>
            )}
          </div>
          <div className={styles.contactInfo}>
            <span>Email: </span>
            {isEditing ? (
              <input
                type="email"
                value={formData.contact.email}
                onChange={(e) =>
                  handleNestedChange("contact", null, "email", e.target.value)
                }
              />
            ) : (
              <span>{formData.contact.email}</span>
            )}
            <span className={styles.separator}></span>
            <span>Phone: </span>
            {isEditing ? (
              <input
                type="text"
                value={formData.contact.phone}
                onChange={(e) =>
                  handleNestedChange("contact", null, "phone", e.target.value)
                }
              />
            ) : (
              <span>{formData.contact.phone}</span>
            )}
          </div>
        </div>

        <div className={styles.details}>
          {/* About Section */}
          <div className={styles.section}>
            <h3>About</h3>
            {isEditing ? (
              <textarea
                value={formData.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
              />
            ) : (
              <p>{formData.about}</p>
            )}
          </div>

          {/* Experience Section */}
          <div className={styles.section}>
            <h3>Experience</h3>
            {formData.experience.map((exp, idx) => (
              <div key={idx} className={styles.sectionListItem}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleNestedChange("experience", idx, "company", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) =>
                        handleNestedChange("experience", idx, "position", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={exp.duration}
                      onChange={(e) =>
                        handleNestedChange("experience", idx, "duration", e.target.value)
                      }
                    />
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleNestedChange("experience", idx, "description", e.target.value)
                      }
                    />
                  </>
                ) : (
                  <div>
                    <strong>{exp.company}</strong>, {exp.position} - {exp.duration}
                    <p>{exp.description}</p>
                  </div>
                )}
              </div>
            ))}
            {isEditing && (
              <button
                onClick={() =>
                  addNewItem("experience", {
                    company: "",
                    position: "",
                    duration: "",
                    description: "",
                  })
                }
              >
                Add Experience
              </button>
            )}
          </div>

          {/* Skills Section */}
          <div className={styles.section}>
            <h3>Skills</h3>
            <ul>
              {formData.skills.map((skill, idx) => (
                <li key={idx}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleNestedChange("skills", idx, null, e.target.value)
                      }
                    />
                  ) : (
                    skill
                  )}
                </li>
              ))}
              {isEditing && (
                <button onClick={() => addNewItem("skills", "")}>Add Skill</button>
              )}
            </ul>
          </div>

          {/* Projects Section */}
          <div className={styles.section}>
            <h3>Projects</h3>
            {formData.projects.map((project, idx) => (
              <div key={idx} className={styles.sectionListItem}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleNestedChange("projects", idx, "name", e.target.value)
                      }
                      placeholder="Project Name"
                    />
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) =>
                        handleNestedChange("projects", idx, "link", e.target.value)
                      }
                      placeholder="Project Link"
                    />
                  </>
                ) : (
                  <div>
                    <strong>{project.name}</strong> - <a href={project.link}>{project.link}</a>
                  </div>
                )}
              </div>
            ))}
            {isEditing && (
              <button
                onClick={() =>
                  addNewItem("projects", {
                    name: "",
                    link: "",
                  })
                }
              >
                Add Project
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={downloadResumeAsPdf}>Download PDF</button>
      </div>
    </>
  );
};

export default CustomTemplate5;

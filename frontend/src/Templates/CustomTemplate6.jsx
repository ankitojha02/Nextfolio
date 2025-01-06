import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import styles from "./CustomTemplate6.module.css";

const CustomTemplate6 = ({ profileImage = null }) => {
  const templateRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    profession: "Software Engineer",
    contact: {
      email: "jane.doe@gmail.com",
      phone: "123-456-7890",
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
    about: "I am a passionate software engineer with expertise in developing scalable and efficient applications. Seeking to leverage my skills in a dynamic team environment.",
    experience: [
      {
        company: "TechCorp",
        location: "New York, NY",
        position: "Software Engineer",
        duration: "Mar 2016 - Jun 2020",
        description: "Developed and maintained web applications.",
      },
    ],
    education: [
      {
        institution: "State University",
        location: "New York, NY",
        duration: "Aug 2012 - May 2016",
      },
    ],
    skills: ["JavaScript", "React", "Node.js"],
    hobbies: "Reading, Traveling, Coding",
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

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
      const updatedSkills = [...formData.skills];
      updatedSkills[idx] = value;
      setFormData((prev) => ({ ...prev, skills: updatedSkills }));
    } else {
      const updatedSection = [...formData[section]];
      updatedSection[idx] = { ...updatedSection[idx], [key]: value };
      setFormData((prev) => ({ ...prev, [section]: updatedSection }));
    }
  };

  const addNewItem = (section, newItem) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const downloadResumeAsPdf = () => {
    if (templateRef.current) {
      const opt = {
        margin: 0,
        filename: "resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(templateRef.current).set(opt).save();
    }
  };

  return (
    <div>
      {/* Buttons outside the template */}
      

      {/* Template container */}
      <div className={styles.container} ref={templateRef}>
        {/* Upper Section */}
        <div className={styles.upperSection}>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter Name"
            />
          ) : (
            <h1>{formData.name}</h1>
          )}
          {isEditing ? (
            <input
              type="text"
              value={formData.profession}
              onChange={(e) => handleInputChange("profession", e.target.value)}
              placeholder="Enter Profession"
            />
          ) : (
            <h2>{formData.profession}</h2>
          )}
        </div>

       <hr />

        <div className={styles.lowerSection}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.section}>
              <h3>Contact</h3>
              <p className={styles.para}>
              <i className="fas fa-envelope"></i>
                Email:{" "}
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) =>
                      handleNestedChange("contact", null, "email", e.target.value)
                    }
                  />
                ) : (
                  formData.contact.email
                )}
              </p>
              <p className={styles.para}>
              <i className="fas fa-phone"></i>
                Phone:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.contact.phone}
                    onChange={(e) =>
                      handleNestedChange("contact", null, "phone", e.target.value)
                    }
                  />
                ) : (
                  formData.contact.phone
                )}
              </p>
              <p className={styles.para}>
              <i className="fab fa-twitter"></i>
               x: {" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.contact.twitter}
                    onChange={(e) =>
                      handleNestedChange("contact", null, "twitter", e.target.value)
                    }
                  />
                ) : (
                  <a
                    href={formData.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.contact.twitter}
                  </a>
                )}
              </p>
              <p className={styles.para}>
              <i className="fab fa-linkedin"></i>
                LinkedIn:{" "}
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.contact.linkedin}
                    onChange={(e) =>
                      handleNestedChange("contact", null, "linkedin", e.target.value)
                    }
                  />
                ) : (
                  <a
                    href={formData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData.contact.linkedin}
                  </a>
                )}
              </p>
            </div>
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
            <div className={styles.section}>
              <h3>Hobbies</h3>
              {isEditing ? (
                <textarea
                  value={formData.hobbies}
                  onChange={(e) => handleInputChange("hobbies", e.target.value)}
                />
              ) : (
                <p>{formData.hobbies}</p>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.section}>
              <h3>About Me</h3>
              {isEditing ? (
                <textarea
                  value={formData.about}
                  onChange={(e) => handleInputChange("about", e.target.value)}
                />
              ) : (
                <p>{formData.about}</p>
              )}
            </div>
            <div className={styles.section}>
              <h3>Education</h3>
              {formData.education.map((edu, idx) => (
                <div key={idx}>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          handleNestedChange(
                            "education",
                            idx,
                            "institution",
                            e.target.value
                          )
                        }
                      />
                      <input
                        type="text"
                        value={edu.duration}
                        onChange={(e) =>
                          handleNestedChange(
                            "education",
                            idx,
                            "duration",
                            e.target.value
                          )
                        }
                      />
                    </>
                  ) : (
                    <p>
                      <strong>{edu.institution}</strong> - {edu.duration}
                    </p>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() =>
                    addNewItem("education", {
                      institution: "",
                      location: "",
                      duration: "",
                    })
                  }
                >
                  Add Education
                </button>
              )}
            </div>
            <div className={styles.section}>
              <h3>Experience</h3>
              {formData.experience.map((exp, idx) => (
                <div key={idx}>
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
                          handleNestedChange(
                            "experience",
                            idx,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </>
                  ) : (
                    <p>
                      <strong>{exp.company}</strong> - {exp.position} ({exp.duration})
                    </p>
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
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={downloadResumeAsPdf}>Download PDF</button>
      </div>
    </div>
  );
};

export default CustomTemplate6;

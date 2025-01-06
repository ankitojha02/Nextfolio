import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import html2pdf from 'html2pdf.js';
import { jsPDF } from "jspdf";
import styles from "./CustomTemplate1.module.css";

const CustomTemplate1 = ({ onSave, profileImage = null }) => {
  const templateRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [formData, setFormData] = useState({
    name: "John Doe",
    profession: "Full Stack Developer",
    contact: {
      email: "",
      github: "",
      linkedIn: "",
      twitter: "",
    },
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    about: "Passionate developer with 3+ years of experience building web applications.",
    education: "Bachelor's Degree in Computer Science",
    workExperience: [
      { company: "Company A", position: "Software Engineer", duration: "2021 - Present" },
      { company: "Company B", position: "Frontend Developer", duration: "2019 - 2021" }
    ],
    projects: [
      { projectname: "Portfolio Website", projectlink: "https://portfolio.com" },
      { projectname: "E-commerce App", projectlink: "https://ecommerce.com" },
    ],
  });

  // Handle input change
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [key]: value },
    }));
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleWorkExperienceChange = (index, key, value) => {
    const updatedExperience = [...formData.workExperience];
    updatedExperience[index][key] = value;
    setFormData((prev) => ({ ...prev, workExperience: updatedExperience }));
  };

  const handleProjectChange = (index, key, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][key] = value;
    setFormData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  // Toggle edit mode
  const toggleEdit = () => setIsEditing((prev) => !prev);

  // Download Resume as Image
  const downloadImage = async () => {
    if (templateRef.current) {
      try {
        const dataUrl = await toPng(templateRef.current, {
          backgroundColor: "white",
          width: templateRef.current.scrollWidth, // Ensure full width
          height: templateRef.current.scrollHeight, // Ensure full height
          style: {
            transform: "scale(1)", // Avoid scaling issues
            transformOrigin: "top center",
          },
        });
  
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "resume.png";
        link.click();
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }
  };
  

 // Download Resume as PDF
 const downloadResumeAsPdf = async () => {
  if (templateRef.current) {
    try {
      const element = templateRef.current;
      const opt = {
        margin: [0, 0, 0, 0], // Top, right, bottom, left margins
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Set format to A4
      };
  
      // Using html2pdf.js to generate the PDF
      html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  }
};

  

  return (
    <>
      <div ref={templateRef} className={styles.previewSection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h3>Contact</h3>
          <div className={styles.contact}>
            <div>
              <i className="fas fa-envelope"></i> 
              {isEditing ? (
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                />
              ) : (
                formData.contact.email
              )}
            </div>
            <div>
              <i className="fab fa-github"></i> 
              {isEditing ? (
                <input
                  type="text"
                  value={formData.contact.github}
                  onChange={(e) => handleContactChange("github", e.target.value)}
                />
              ) : (
                "GitHub"
              )}
            </div>
            <div>
              <i className="fab fa-linkedin"></i> 
              {isEditing ? (
                <input
                  type="text"
                  value={formData.contact.linkedIn}
                  onChange={(e) => handleContactChange("linkedIn", e.target.value)}
                />
              ) : (
                "LinkedIn"
              )}
            </div>
            <div>
              <i className="fab fa-twitter"></i> 
              {isEditing ? (
                <input
                  type="text"
                  value={formData.contact.twitter}
                  onChange={(e) => handleContactChange("twitter", e.target.value)}
                />
              ) : (
                "Twitter"
              )}
            </div>
          </div>

          <div className={styles.skills}>
            <h3>Skills</h3>
            <ul>
              {formData.skills.map((skill, index) => (
                <li key={index}>
                  {isEditing ? (
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillsChange(index, e.target.value)}
                    />
                  ) : (
                    skill
                  )}
                </li>
              ))}
              {isEditing && (
                <button
                  onClick={() => handleInputChange("skills", [...formData.skills, ""])}
                >
                  Add Skill
                </button>
              )}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.section}>
            <h2>
            {isEditing ? (
                    <input type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                ) : (
                    formData.name
                )}
            </h2>
            <p><strong>Profession:</strong> 
              {isEditing ? (
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => handleInputChange("profession", e.target.value)}
                />
              ) : (
                formData.profession
              )}
            </p>
          </div>

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
            {isEditing ? (
              <textarea
                value={formData.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
              />
            ) : (
              <p>{formData.education}</p>
            )}
          </div>

          {/* Work Experience */}
          <div className={styles.section}>
            <h3>Work Experience</h3>
            <ul>
              {formData.workExperience.map((experience, index) => (
                <li key={index}>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={experience.company}
                        onChange={(e) =>
                          handleWorkExperienceChange(index, "company", e.target.value)
                        }
                        placeholder="Company Name"
                      />
                      <input
                        type="text"
                        value={experience.position}
                        onChange={(e) =>
                          handleWorkExperienceChange(index, "position", e.target.value)
                        }
                        placeholder="Position"
                      />
                      <input
                        type="text"
                        value={experience.duration}
                        onChange={(e) =>
                          handleWorkExperienceChange(index, "duration", e.target.value)
                        }
                        placeholder="Duration"
                      />
                    </>
                  ) : (
                    <p>{experience.company} - {experience.position} ({experience.duration})</p>
                  )}
                </li>
              ))}
              {isEditing && (
                <button
                  onClick={() =>
                    handleInputChange("workExperience", [
                      ...formData.workExperience,
                      { company: "", position: "", duration: "" },
                    ])
                  }
                >
                  Add Work Experience
                </button>
              )}
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Projects</h3>
            <ul>
              {formData.projects.map((project, index) => (
                <li key={index}>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={project.projectname}
                        onChange={(e) => handleProjectChange(index, "projectname", e.target.value)}
                      />
                      <input
                        type="text"
                        value={project.projectlink}
                        onChange={(e) => handleProjectChange(index, "projectlink", e.target.value)}
                      />
                    </>
                  ) : (
                    <p>{project.projectname} - <a href={project.projectlink} target="_blank" rel="noopener noreferrer">{project.projectlink}</a></p>
                  )}
                </li>
              ))}
              {isEditing && (
                <button
                  onClick={() =>
                    handleInputChange("projects", [
                      ...formData.projects,
                      { projectname: "", projectlink: "" },
                    ])
                  }
                >
                  Add Project
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={downloadResumeAsPdf}>Download Resume</button>
      </div>
    </>
  );
};

export default CustomTemplate1;

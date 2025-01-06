{
  /*
import React, { useState, useRef } from 'react';
import axios from 'axios';
import Template1 from '../Templates/Template1'; // Import Template1
import { toPng } from 'html-to-image'; // Import the library
import styles from './CreatePortfolio.module.css'; // Import the CSS module

function CreatePortfolio() {
  const [name, setName] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [about, setAbout] = useState('');
  const [workexperience, setWorkExperience] = useState('');
  const [projects, setProjects] = useState([{ projectname: '', projectlink: '' }]);
  const [contact, setContact] = useState({
    email: '',
    github: '',
    twitter: '',
    linkedIn: '',
  });
  const [hobby, setHobby] = useState('');
  const [template, setTemplate] = useState('template1'); // Default template

  const previewRef = useRef(null); // Ref for the preview section

  const handleAddProject = () => {
    setProjects([...projects, { projectname: '', projectlink: '' }]);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const portfolioData = {
      name,
      skills: skills.split(','),
      education,
      about,
      workexperience,
      projects,
      contact,
      hobby,
      template, // Include the selected template
    };

    try {
      await axios.post('http://localhost:5000/api/auth/create', portfolioData);
      alert('Portfolio created successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current); // Convert the DOM node to PNG
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'portfolio-preview.png'; // File name
        link.click(); // Trigger download
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    }
  };

  return (
    <div className={styles.createPortfolio}>
      <h1 className={styles.title}>Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {/* Name 
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />

        {/* Skills 
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className={styles.inputField}
        />

        {/* Education 
        <input
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className={styles.inputField}
        />

        {/* About Me 
        <textarea
          placeholder="About Me"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className={styles.textareaField}
        />

        {/* Work Experience 
        <textarea
          placeholder="Work Experience"
          value={workexperience}
          onChange={(e) => setWorkExperience(e.target.value)}
          className={styles.textareaField}
        />

        {/* Projects 
        <div className={styles.projectsSection}>
          <h3>Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <input
                type="text"
                placeholder="Project Title"
                value={project.projectname}
                onChange={(e) => handleProjectChange(index, 'projectname', e.target.value)}
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Project Link"
                value={project.projectlink}
                onChange={(e) => handleProjectChange(index, 'projectlink', e.target.value)}
                className={styles.inputField}
              />
            </div>
          ))}
          <button
            type="button"
            className={`${styles.btn} ${styles.addBtn}`}
            onClick={handleAddProject}
          >
            Add Another Project
          </button>
        </div>

        {/* Contact Details 
        <div className={styles.contactSection}>
          <h3>Contact Details</h3>
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="GitHub"
            value={contact.github}
            onChange={(e) => setContact({ ...contact, github: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Twitter"
            value={contact.twitter}
            onChange={(e) => setContact({ ...contact, twitter: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="LinkedIn"
            value={contact.linkedIn}
            onChange={(e) => setContact({ ...contact, linkedIn: e.target.value })}
            className={styles.inputField}
          />
        </div>

        {/* Hobby 
        <input
          type="text"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          className={styles.inputField}
        />

        {/* Template Selection 
        <div className={styles.templateSection}>
          <h3>Select a Template</h3>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className={styles.dropdown}
          >
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
        </div>

        {/* Submit Button 
        <button type="submit" className={`${styles.btn} ${styles.submitBtn}`}>
          Save Portfolio
        </button>
      </form>

      {/* Preview Section 
      <div className={styles.preview}>
        <h2>Portfolio Preview</h2>
        <div ref={previewRef}>
          {template === 'template1' && (
            <Template1
              name={name}
              skills={skills.split(',')}
              education={education}
              about={about}
              workExperience={workexperience}
              projects={projects}
              contact={contact}
              hobby={hobby}
            />
          )}
        </div>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download as Image
        </button>
      </div>
    </div>
  );
}

export default CreatePortfolio;

*/
}

import React, { useState, useRef } from "react";
import axios from "axios";
import Template1 from "../Templates/Template1"; // Import Template1
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import { toPng } from "html-to-image"; // Import the library
import styles from "./CreatePortfolio.module.css"; // Import the CSS module

function CreatePortfolio() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [about, setAbout] = useState("");
  const [workexperience, setWorkExperience] = useState("");
  const [projects, setProjects] = useState([
    { projectname: "", projectlink: "" },
  ]);
  const [contact, setContact] = useState({
    email: "",
    github: "",
    twitter: "",
    linkedIn: "",
  });
  const [hobby, setHobby] = useState("");
  const [template, setTemplate] = useState("template1"); // Default template
  const [profileImage, setProfileImage] = useState(null); // Profile image state

  const previewRef = useRef(null); // Ref for the preview section

  const handleAddProject = () => {
    setProjects([...projects, { projectname: "", projectlink: "" }]);
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set the base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const portfolioData = {
      name,
      skills: skills.split(","),
      education,
      about,
      workexperience,
      projects,
      contact,
      hobby,
      template,
      profileImage, // Include profile image
    };

    try {
      await axios.post("http://localhost:5000/api/auth/create", portfolioData);
      alert("Portfolio created successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current); // Convert the DOM node to PNG
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "portfolio-preview.png"; // File name
        link.click(); // Trigger download
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }
  };

  return (
    <div className={styles.createPortfolio}>
      <h1 className={styles.title}>Create Your Portfolio</h1>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />

        {/* Profile Image */}
        <div className={styles.imageUploadSection}>
          <label htmlFor="profileImage" className={styles.imageUploadLabel}>
            Upload Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
        </div>

        {/* Skills */}
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className={styles.inputField}
        />

        {/* Education */}
        <input
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className={styles.inputField}
        />

        {/* About Me */}
        <textarea
          placeholder="About Me"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className={styles.textareaField}
        />

        {/* Work Experience */}
        <textarea
          placeholder="Work Experience"
          value={workexperience}
          onChange={(e) => setWorkExperience(e.target.value)}
          className={styles.textareaField}
        />

        {/* Projects */}
        <div className={styles.projectsSection}>
          <h3>Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <input
                type="text"
                placeholder="Project Title"
                value={project.projectname}
                onChange={(e) =>
                  handleProjectChange(index, "projectname", e.target.value)
                }
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Project Link"
                value={project.projectlink}
                onChange={(e) =>
                  handleProjectChange(index, "projectlink", e.target.value)
                }
                className={styles.inputField}
              />
            </div>
          ))}
          <button
            type="button"
            className={`${styles.btn} ${styles.addBtn}`}
            onClick={handleAddProject}
          >
            Add Another Project
          </button>
        </div>

        {/* Contact Details */}
        <div className={styles.contactSection}>
          <h3>Contact Details</h3>
          <input
            type="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="GitHub"
            value={contact.github}
            onChange={(e) => setContact({ ...contact, github: e.target.value })}
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Twitter"
            value={contact.twitter}
            onChange={(e) =>
              setContact({ ...contact, twitter: e.target.value })
            }
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="LinkedIn"
            value={contact.linkedIn}
            onChange={(e) =>
              setContact({ ...contact, linkedIn: e.target.value })
            }
            className={styles.inputField}
          />
        </div>

        {/* Hobby */}
        <input
          type="text"
          placeholder="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          className={styles.inputField}
        />

        {/* Template Selection */}
        <div className={styles.templateSection}>
          <h3>Select a Template</h3>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className={styles.dropdown}
          >
            <option value="template1">Template 1</option>
            <option value="template2">Coffee Beige</option>
            <option value="template3">Vibrant Blue</option>
            <option value="template4">Toronto</option>
            <option value="template5">Elephant Gray</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className={`${styles.btn} ${styles.submitBtn}`}>
          Save Portfolio
        </button>
      </form>

      {/* Preview Section */}
      <div className={styles.preview}>
        <h2>Portfolio Preview</h2>
        <div ref={previewRef}>
          {template === "template1" && (
            <Template1
              name={name}
              skills={skills.split(",")}
              education={education}
              about={about}
              workExperience={workexperience}
              projects={projects}
              contact={contact}
              hobby={hobby}
              profileImage={profileImage} // Pass the profile image to the template
            />
          )}

          {template === "template2" && (
            <Template2
              name={name}
              skills={skills.split(",")}
              education={education}
              about={about}
              workExperience={workexperience}
              projects={projects}
              contact={contact}
              hobby={hobby}
              profileImage={profileImage} // Pass the profile image to the template
            />
          )}

          {template === "template3" && (
            <Template3
              name={name}
              profileImage={profileImage}
              contact={contact}
              about={about}
              education={education}
              skills={skills.split(",")}
              workExperience={workexperience}
              projects={projects}
              hobby={hobby}
            />
          )}

          {template === "template4" && (
            <Template4
              name={name}
              profileImage={profileImage}
              contact={contact}
              about={about}
              education={education}
              skills={skills.split(",")}
              workExperience={workexperience}
              projects={projects}
              hobby={hobby}
            />
          )}

{template === "template5" && (
  <Template5
    name={name}
    skills={skills.split(",")}
    education={education}
    about={about}
    workExperience={workexperience}
    projects={projects}
    contact={contact}
    hobby={hobby}
  />
)}

        </div>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download as Image
        </button>
      </div>
    </div>
  );
}

export default CreatePortfolio;

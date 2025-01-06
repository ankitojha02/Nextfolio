import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./CustomTemplate.module.css";
import Custom1 from "../assets/CustomTemplate1.png"
import Custom2 from "../assets/CustomTemplate2.png"
import Custom3 from "../assets/CustomTemplate3.png"
import Custom4 from "../assets/CustomTemplate4.png"
import Custom5 from "../assets/CustomTemplate5.png"
import Custom6 from "../assets/CustomTemplate6.png"
const templates = [
  {
    id: 1,
    name: "Navy Blue",
    description: "An excellent CV for the contemporary job seeker.",
    image: Custom1,
  },
  {
    id: 2,
    name: "Knight Black",
    description: "A professional CV for corporate job applications.",
    image: Custom2,
  },
  {
    id: 3,
    name: "ATS Friendly",
    description: "A vibrant CV for creative professionals.",
    image: Custom3,
  },
  {
    id: 4,
    name: "Coffee And Resume",
    description: "A modern CV template for all industries.",
    image: Custom4,
  },
  {
    id: 5,
    name: "Bold Beige",
    description: "A modern CV template for all industries.",
    image: Custom5,
  },
  {
    id: 6,
    name: "Toronto$",
    description: "A modern CV template for all industries.",
    image: Custom6,
  },
  {
    id: 7,
    name: "Coffee And Resume",
    description: "A modern CV template for all industries.",
    image: Custom4,
  },
  {
    id: 8,
    name: "Coffee And Resume",
    description: "A modern CV template for all industries.",
    image: Custom4,
  },
];

const CustomTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSelectTemplate = (id) => {
    const template = templates.find((template) => template.id === id);
    setSelectedTemplate(template);

    // Navigate to the route based on the selected template ID
    navigate(`/customtemplate${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Choose Your CV Template</h1>
      <div className={styles.templateGrid}>
        {templates.map((template) => (
          <div key={template.id} className={styles.templateCard}>
            <img
              src={template.image}
              alt={template.name}
              className={styles.templateImage}
            />
            <h3 className={styles.templateName}>{template.name}</h3>
            <p className={styles.templateDescription}>
              {template.description}
            </p>
            <button
              className={styles.selectButton}
              onClick={() => handleSelectTemplate(template.id)}
            >
              Select Template
            </button>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className={styles.selectedTemplate}>
          <h2>Selected Template:</h2>
          <p>
            <strong>{selectedTemplate.name}</strong>:{" "}
            {selectedTemplate.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomTemplate;

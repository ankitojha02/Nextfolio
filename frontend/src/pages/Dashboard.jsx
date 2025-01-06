
{/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Dashboard.module.css'; // Assume styles are imported
import Template1 from '../Templates/Template1'; // Assuming Template1 is your portfolio component

function Dashboard() {
    const [portfolios, setPortfolios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingPortfolio, setEditingPortfolio] = useState(null); // Track the portfolio being edited

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/dashboard');
                setPortfolios(response.data);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch portfolios.');
                setIsLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const handleEdit = (portfolio) => {
        setEditingPortfolio(portfolio); // Set the portfolio being edited
    };

    const handleSave = async (updatedPortfolio) => {
        try {
            console.log(updatedPortfolio._id);
            await axios.put(`http://localhost:5000/api/auth/dashboard/${updatedPortfolio._id}`, updatedPortfolio);
            setPortfolios((prevPortfolios) =>
                prevPortfolios.map((p) => (p._id === updatedPortfolio._id ? updatedPortfolio : p))
            );
            setEditingPortfolio(null); // Exit edit mode
        } catch (err) {
            console.error('Failed to save portfolio.', err);
        }
    };

    const handleCancel = () => {
        setEditingPortfolio(null); // Exit edit mode
    };

    return (
        <div className={styles.dashboard}>
            <h1>Your Portfolios</h1>
            {editingPortfolio ? (
                <div className={styles.editMode}>
                    <Template1
                        {...editingPortfolio}
                        isEditing={true}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                </div>
            ) : (
                <div className={styles.portfolioGrid}>
                    {portfolios.length === 0 ? (
                        <p>No portfolios available.</p>
                    ) : (
                        portfolios.map((portfolio) => (
                            <div className={styles.portfolioCard} key={portfolio._id}>
                                <div className={styles.templatePreview}>
                                    <h2>{portfolio.name}'s Portfolio</h2>
                                    <p>{portfolio.about}</p>
                                </div>
                                <div className={styles.cardActions}>
                                    <button
                                        className={styles.editBtn}
                                        onClick={() => handleEdit(portfolio)}
                                    >
                                        Edit Portfolio
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
*/}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import covera from "../assets/covera.png";
import coverb from "../assets/coverb.png";
import coverc from "../assets/coverc.png";
import covere from "../assets/covere.avif";
import coverd from "../assets/coverd.png";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "A sleek and professional cover letter for job seekers.",
    image : covera,
    
  },
  {
    id: 2,
    name: "Creative Flair",
    description: "Perfect for showcasing creativity in your cover letter.",
    image : coverb,
  },
  {
    id: 3,
    name: "Simple and Elegant",
    description: "An elegant template with a clean design.",
    image : coverc,
  },
  {
    id: 4,
    name: "Corporate Style",
    description: "A classic corporate-style cover letter template.",
    image : covere,
  },
  {
    id: 5,
    name: "Minimalist",
    description: "A minimalistic template for a modern touch.",
    image: coverd
  },
  
];

const Dashboard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelectTemplate = (id) => {
    const template = templates.find((template) => template.id === id);
    setSelectedTemplate(template);

    // Navigate to the route based on the selected template ID
    navigate(`/coverlettertemplate${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Choose Your Cover Letter Template</h1>
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

export default Dashboard;

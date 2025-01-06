import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js"; // Import html2pdf.js
import { toPng } from "html-to-image";
import styles from "./CoverLetterTemplate1.module.css";

const CoverLetterTemplate1 = () => {
  const templateRef = useRef(null); // Ref to capture the entire template

  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [content, setContent] = useState({
    name: "JAMES MARK BROWN",
    jobTitle: "Web Design",
    date: "22 January 2021",
    address: `The Director
Systems Integration Services
20022 Quail Rin Dr
DUNNELLON, Florida.`,
    companyAddress: `The Director
[Company Name]
[Street Address]
[City, State, ZIP]`,
    contact: {
      phone: "+1135531603",
      email: "JAMESBROWN@GMAIL.COM",
      address: "NO 9 KING WOOD STREET, WD",
    },
    body: `Dear [Ms.] [Miss] [Mr.] [Dr.] [Last Name],

I look forward to the opportunity to speak with you further regarding how I can contribute to the continued success of [Target Company Name]. Thank you again.

Regards,
[First Name] [Last Name]
[Phone Number]
[Email Address]`,
  });

  // Handle input change for nested fields
  const handleInputChange = (field, value) => {
    if (field.startsWith("contact.")) {
      const fieldName = field.split(".")[1]; // Extract the nested field name (e.g., phone, email, address)
      setContent((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [fieldName]: value, // Update the specific contact field
        },
      }));
    } else {
      setContent((prev) => ({ ...prev, [field]: value }));
    }
  };

  // Toggle edit mode
  const toggleEdit = () => setIsEditing((prev) => !prev);

  // Download Cover Letter as Image
  const downloadImage = async () => {
    if (templateRef.current) {
      try {
        const dataUrl = await toPng(templateRef.current, {
          backgroundColor: "white",
          width: templateRef.current.scrollWidth,
          height: templateRef.current.scrollHeight,
          style: {
            transform: "scale(1)",
            transformOrigin: "top center",
          },
        });

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "cover_letter.png";
        link.click();
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }
  };

  // Download Cover Letter as PDF
  const downloadPDF = () => {
    const opt = {
      margin: [0, 0, 0, 0], // Top, right, bottom, left margins
      filename: "cover_letter.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // A4 format
    };
    html2pdf()
      .from(templateRef.current)
      .set(opt)
      .save();
  };

  return (
    <>
      <div ref={templateRef} className={styles.previewSection}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h1 className={styles.coverhead}>Cover</h1>
          <h3 className={styles.to}>To</h3>
          <div className={styles.companyAddress}>
            {isEditing ? (
              <textarea
                value={content.companyAddress}
                onChange={(e) => handleInputChange("companyAddress", e.target.value)}
              />
            ) : (
              <p>{content.companyAddress}</p>
            )}
          </div>

          <h3 className={styles.contactheading}>Contact</h3>
          <div className={styles.contact}>
            <div className={styles.phone}>
              📞{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={content.contact.phone}
                  onChange={(e) => handleInputChange("contact.phone", e.target.value)}
                />
              ) : (
                content.contact.phone
              )}
            </div>
            <div className={styles.message}>
              ✉️{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={content.contact.email}
                  onChange={(e) => handleInputChange("contact.email", e.target.value)}
                />
              ) : (
                content.contact.email
              )}
            </div>
            <div className={styles.address}>
              📍{" "}
              {isEditing ? (
                <textarea
                  value={content.contact.address}
                  onChange={(e) => handleInputChange("contact.address", e.target.value)}
                />
              ) : (
                content.contact.address
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.section}>
            <h1  className={styles.para}>
              {isEditing ? (
                <input
                  type="text"
                  value={content.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              ) : (
                content.name
              )}
            </h1>
            <p>
              <strong>Profession:</strong>{" "}
              {isEditing ? (
                <input
                  type="text"
                  value={content.jobTitle}
                  onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                />
              ) : (
                content.jobTitle
              )}
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.date}>Date</h3>
            {isEditing ? (
              <input
                type="date"
                value={content.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
            ) : (
              <p >{content.date}</p>
            )}
          </div>

          <div className={styles.section}>
            <h3>Cover Letter</h3>
            {isEditing ? (
              <textarea
                value={content.body}
                onChange={(e) => handleInputChange("body", e.target.value)}
              />
            ) : (
              <p>{content.body}</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={downloadPDF}>Download Cover Letter as PDF</button>
       
      </div>
    </>
  );
};

export default CoverLetterTemplate1;

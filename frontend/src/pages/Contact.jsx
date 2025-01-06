import React, { useState } from 'react';
import styles from './Contact.module.css'; // Importing the scoped CSS module

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Message sent successfully");
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
            console.error(error);
        }
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <div className={styles.contactHeader}>
                    <h2>Contact Me</h2>
                </div>
                <h3 className={styles.contactQuestion}>Have You Any Questions?</h3>
                <h4 className={styles.contactSubtitle}>I'M AT YOUR SERVICES</h4>
                <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                        <i className="fab fa-twitter"></i>
                        <h4>Twitter</h4>
                        <p>@Ankit_Ojha_01</p>
                    </div>
                    <div className={styles.infoItem}>
                        <i className="fab fa-github"></i>
                        <h4>GitHub</h4>
                        <p>ankitojha02</p>
                    </div>
                    <div className={styles.infoItem}>
                        <i className="fa fa-envelope"></i>
                        <h4>Email</h4>
                        <p>ojhaa2207@gmail.com</p>
                    </div>
                    <div className={styles.infoItem}>
                        <i className="fa fa-globe-asia"></i>
                        <h4>Website</h4>
                        <p><a href="https://ankitojha02.github.io/My-Portfolio/">Portfolio</a></p>
                    </div>
                </div>
                <h3 className={styles.contactEmailTitle}>SEND ME AN EMAIL</h3>
                <h4 className={styles.contactEmailSubtitle}>I'M VERY RESPONSIVE TO MESSAGES</h4>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <input
                                type="text"
                                name="subject"
                                onChange={handleChange}
                                value={formData.subject}
                                placeholder="Subject"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                                placeholder="Message"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

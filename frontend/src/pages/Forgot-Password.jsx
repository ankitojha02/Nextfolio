import React, { useState } from "react";
import styles from "./Forgot-Password.module.css"; // Import CSS module

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Password reset email sent!");
        setEmail("");
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.log("Forgot password error: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlePasswordReset}>
        <h1>Forgot Password</h1>
        <p>Enter your email address to receive a password reset link.</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
        <p>
          Remembered your password?{" "}
          <a href="/login" className={styles.link}>
            Go back to Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

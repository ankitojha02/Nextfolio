import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Reset-Password.module.css";  // Import CSS module

const ResetPassword = () => {
  const { token } = useParams(); // Extract token from URL
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });

      if (response.ok) {
        alert("Password reset successful!");
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Reset password error:", error);
    }
  };

  return (
    <form className={styles.forma} onSubmit={handlePasswordReset}>
      <h1 className={styles.headinga}>Reset Password</h1>
      <input
        className={styles.inputa}
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <input
        className={styles.inputa}
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button className={styles.buttona} type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;

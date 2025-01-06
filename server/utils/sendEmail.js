const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ankitkumarojhaojha9@gmail.com",
        pass: "ndoz ssfz bosm qbqc",
      },
    });
  
    await transporter.sendMail({
      from: "ankitkumarojhaojha9@gmail.com",
      to,
      subject,
      text,
    });
  };
  
  module.exports = sendEmail;
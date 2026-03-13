const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password"
  }

});

async function sendEmail(to, subject, body, token) {

  const trackingLink = `http://localhost:5000/track/${token}`;

  const mailOptions = {

    from: "your_email@gmail.com",

    to: to,

    subject: subject,

    html: `
      <p>${body}</p>
      <a href="${trackingLink}">Click here</a>
    `
  };

  await transporter.sendMail(mailOptions);

}

module.exports = sendEmail;

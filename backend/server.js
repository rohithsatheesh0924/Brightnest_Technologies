const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();
const emailTemplate = require("./emailTemplate.js")

const app = express();
app.use(cors());
app.use(express.json());

// Email Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
}) ;

//API to send email
app.post("/send-email", async (req, res) => {
  const {name, email,phone,whatsapp,service, message} = req.body;

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Contact Message",
      html: emailTemplate ( {name, email,phone,whatsapp,service, message} ),
    };

    await transporter.sendMail(mailOptions); 

    console.log("✅ Email sent successfully");
    res.status(200).json({ success: true, message: "Email sent" });

  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
});

app.listen(process.env.PORT, ()=> {
    console.log(`server running on port ${process.env.PORT}`)
})
const emailTemplate = ({ name, email,phone, whatsapp ,service, message }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.5; color: #000;">
  
  <h3>New Inquiry Message From Your Website</h3>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Whatsapp:</strong> ${whatsapp}</p>
  <p><strong>Service:</strong> ${service}</p>

  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, "<br>")}</p>

  <hr>

  <p style="font-size: 12px; color: #555;">
    This email was sent from your website contact form.
  </p>

</body>
</html>
`;

module.exports = emailTemplate; 

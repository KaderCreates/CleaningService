const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

// inititate an express app 
const app = express();

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html");
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });



app.use('/images', express.static('images'));
app.use('/contact.js', express.static('contact.js'));
app.use('/style.css', express.static('style.css'));



  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", //replace with your email provider
    port: 587,
    secure: false,

    auth: {
      user: process.env.HOTMAIL_USER_NAME,
      pass: process.env.HOTMAIL_USER_PASSWORD,
    },
  });

  // verfiy connection configuration 
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post("/send", (req, res) => {
    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      console.log(data);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
  
      //2. You can configure the object however you want
      const mail = {
        from: process.env.HOTMAIL_USER_NAME,
        to: process.env.HOTMAIL_USER_NAME,
        subject: data.subject,
        text: `${data.firstName} ${data.lastName} ${data.emailAddress} ${data.phoneNumber} ${data.addressLine1} ${data.addressLine2} ${data.addressCity} ${data.addressState} ${data.addressZip} ${data.addressCountry} ${data.message}`,
      };
  
      //3.
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });

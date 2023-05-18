import nodemailer from "nodemailer";
import config from "../config/index";

interface EmailData {
  email: string;
  subject: string;
  html: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: config.app.authEMAIL, // generated ethereal user ,
        pass: config.app.authPASSWORD, // generated ethereal password
      },
    });

    const mailOptions = {
      from: config.app.authEMAIL, // sender address
      to: emailData.email, // list of receivers
      subject: emailData.subject, // Subject line
      html: emailData.html, // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent: %s", info.response);
      }
    });

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error);
  }
};

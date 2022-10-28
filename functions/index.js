const functions = require('firebase-functions');
const { error } = require('firebase-functions/logger');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true,
});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
  secure: true,
});

exports.sendMail = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return;
      }

      const { name, email, phone, message } = req.body;
      const firstName = /\s/g.test(name) ? name.split(' ')[0] : name;

      const personalEmailOptions = {
        from: gmailEmail,
        to: 'echannah631@gmail.com',
        subject: `Bro, somebody sent you a message from your website!`,
        html: `<p style="font-size: 16px">From: ${name}</p>
             <p style="font-size: 16px">Email: ${email}</p>
             <p style="font-size: 16px">Phone Number: ${phone}</p>
             <p style="font-size: 16px">Message: ${message}</p>
            `,
      };

      const recipientEmailOptions = {
        from: gmailEmail,
        to: email,
        subject: 'A message from Elliot Hannah',
        html: `<p style="font-size: 16px">Hey ${firstName},</p>
             <p style="font-size: 16px">Thank you for visiting my site! I worked very hard on every aspect of it to showcase my true talents and passions. I hope you were impressed with everything and were able to learn something about me. Building this site was a personal goal of mine and achieving this goal is a huge milestone for me. If you are a recruiter or hiring manager, I hope my site serves as insight to my coding abilities and propels me to becoming a potential team member to your organization.</p>
             <p style="font-size: 16px">I appreciate your message and will respond at my earliest convenience. If you would like to get in contact with me, my email is <a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a>. Again, thank you and I hope you have a blessed day!</p>
             <p style="font-size: 16px;">Sincerely,</p>
             <br/>
             <p style="font-size: 16px;">Elliot C. Hannah</p>
             <p style="font-size: 12px; margin-top: -10px;">Full Stack Developer</p>
             <hr />
             <p style="font-size: 12px;"><strong>Phone: </strong><a href="tel:7066317005">(706) 631-7005</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Email: </strong><a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Website: </strong><a href="https://thatsehannah.com">thatsehannah.com</a></p>
            `,
      };

      return mailTransport.sendMail(personalEmailOptions).then(() => {
        console.log('New email sent to:', gmailEmail);
        mailTransport.sendMail(recipientEmailOptions).then(() => {
          console.log('Response email sent to: ', email);
        });
        res.send('Message sent successfully!');
        return;
      });
    });
  }
});

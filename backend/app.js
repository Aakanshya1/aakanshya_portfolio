const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(cors());
dotenv.config();

app.use(bodyParser.json());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173/",
  "https://aakanshya-portfolio.vercel.app/",
  "https://aakanshya-gyawali.vercel.app/"
];
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true 
}));

const transporter = nodemailer.createTransport({
    service: 'gmail',  
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,     
    }
  });

  app.post('/contact', (req, res) => {
    const {name, email,phoneno, message}= req.body
    if (!name || !email || !phoneno || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

const mailOptions = {
  from: process.env.EMAIL,
  replyTo: email,
  to: "aakanshya.gyawali@gmail.com",
  subject: `Contact Message from ${name}`,
 text: `
    From: ${name} <${email}>
    Phone: ${phoneno}
    Message: ${message}
  `
};



    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Error sending message', error });
      }
      return res.status(200).json({ message: 'Message sent successfully!', info });
    });
  });

app.get('/', (req, res) => res.send('Aakanshya Portfolio!'))

app.listen(process.env.PORT,()=>{
    console.log(`server is runing on port  ${process.env.PORT}`);
})


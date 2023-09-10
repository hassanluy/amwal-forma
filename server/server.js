const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4000;

// enable cors
app.use(cors());

//set express view engine
app.set('view engine', 'ejs');






























// sending the data to the email


// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     auth: {
//         user: "hasanluy185@gmail.com", // Your Gmail email address
//         pass: "xabitbrjnkzxakob", // Your Gmail password or app-specific password
//     },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//         from: "hasanluy185@gmail.com", // Your Gmail email address
//         to: "hasanluy851@gmail.com", // Recipient's Gmail email address
//         subject: "Hello from the back end",
//         text: "Hello world from hassan loai the master of the web & mobile development ",
//         html: `<h1>this is the html tag that being sent 2 </h1>`
//     });

//     console.log("Message sent: %s", info.messageId);
// }

// main().catch(console.error);

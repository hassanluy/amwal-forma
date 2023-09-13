const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');


const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage });
const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'client/build')));

const tempImageDir = path.join(__dirname, 'temp-images');

if (!fs.existsSync(tempImageDir)) {
    fs.mkdirSync(tempImageDir);
}
// POST REQUEST
app.post('/api/sendIqEmail', upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
]), async (req, res) => {
    const {
        firstName,
        email,
        img1Name,
        img1,
    } = req.body;
    console.log(req)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: "hasanluy185@gmail.com",
            pass: "xabitbrjnkzxakob",
        },
    });
    console.log(img1)
    const emailTemplate = `
    <html>
      <body>
        <div style="text-align: center;">
          <img src="$cid:img1" style="display: block; margin: 0 auto; border-radius: 50%;" width="150" height="150">
          <h1 style="font-size: 30px; font-weight: bold;">${firstName}</h1>
          <p style="color: blue; font-size: 16px; font-weight: 600;">${email}</p>
        </div>
      </body>
    </html>
  `;

    try {
        const info = await transporter.sendMail({
            from: 'hasanluy185@gmail.com',
            to: email,
            subject: 'New Form Submission',
            html: emailTemplate,
            attachments: [
                {
                    filename: img1Name,
                    content: img1,
                    cid: 'img1',
                },
            ],
        });

        if (img1Name) {
            const img1Path = path.join(tempImageDir, img1Name);
            if (fs.existsSync(img1Path)) {
                fs.unlinkSync(img1Path);
            }
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






































// const express = require('express');
// const multer = require('multer');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const cors = require('cors')

// const app = express();
// const port = process.env.PORT || 5000;

// // Create a storage engine using multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });
// const corsOptions = {
//     origin: 'http://localhost:3000',
// };

// app.use(cors(corsOptions));// Serve the React app

// app.use(express.static(path.join(__dirname, 'client/build')));

// // Handle form submission
// app.post('/api/sendIqEmail', upload.fields([
//     { name: 'img1', maxCount: 1 },
//     { name: 'img2', maxCount: 1 },
//     { name: 'img3', maxCount: 1 },
//     { name: 'img4', maxCount: 1 },
// ]), async (req, res) => {
//     const {
//         firstName,
//         fatherName,
//         grandFatherName,
//         lastName,
//         phoneNumber,
//         email,
//         img1Name,
//         img2Name,
//         img3Name,
//         img4Name,
//         img1,
//         img2,
//         img3,
//         img4,
//         nationalId,
//         nationalIdIssueDate,
//         nationalIdIssuePlace,
//         placeOfBirth,
//         motherFullName,
//         birthDate,
//         monthlyIncome,
//         occupation, // the name of the job
//         governorate,
//         region,
//         neighborhood,
//         alley,
//         house
//     } = req.body
//     // const img1Buffer = Buffer.from(img1, "base64");
//     // const img2Buffer = Buffer.from(img2, "base64");
//     // const img3Buffer = Buffer.from(img3, "base64");
//     // const img4Buffer = Buffer.from(img4, "base64");
//     // Configure nodemailer to send emails using Gmail
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         auth: {
//             user: "hasanluy185@gmail.com", // Your Gmail email address
//             pass: "xabitbrjnkzxakob", // Your Gmail password or app-specific password
//         },
//     });

//     // Create an email template
//     const emailTemplate = `
//     <html>
//       <body>
//         <div style="text-align: center;">
//           <img src="cid:img1" style="display: block; margin: 0 auto; border-radius: 50%;" width="150" height="150">
//           <h1 style="font-size: 30px; font-weight: bold;">${firstName}</h1>
//           <p style="color: blue; font-size: 16px; font-weight: 600;">${email}</p>
//         </div>
//       </body>
//     </html>
//   `;
//     // Send the email
//     try {
//         const info = await transporter.sendMail({
//             from: email,
//             to: 'hasanluy185@gmail.com',
//             subject: 'New Form Submission',
//             html: emailTemplate,
//             attachments: [
//                 {
//                     filename: img1Name, // Use the original name of the uploaded image
//                     content: img1Name, // Use the buffer of the uploaded image
//                     cid: 'img1', // Content ID to match in the email template
//                 },
//             ],
//         });

//         // console.log('Email sent:', info.response);
//         res.sendStatus(200);
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });























// // sending the data to the email


// // const nodemailer = require("nodemailer");

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

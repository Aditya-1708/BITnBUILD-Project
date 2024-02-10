const express = require("express");
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const path = require("path");
const { sendEmail } = require('./EmailService/emailController');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express()
app.use(bodyParser.json());
const saltrounds = 10;

async function generateOTP() {
    const length = 6;
    const chars = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        otp += chars[randomIndex];
    }
    return otp;
}

app.post('/users/emailOTP', async (req, res) => {
    try {
        const { email } = req.body;
        const otp = await generateOTP();
        await sendEmail(
            'John Doe',
            'Welcome to our platform!',
            'Thank you for joining us.',
            `Your OTP is: ${otp}`,
            email
        );
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/users/verify', async (req, res) => {
    const { email, OTP } = req.body;
    const results = await userController.getDetailsForVerification(email);
    if (compareOTP(OTP, Number(results[0].otp)) === false) {
        res.status(200).json({ message: "Email successfully verified" });
    }
    else {
        adminController.deleteEmailIfOTPUnsuccessful(email);
        res.status(400).json({ message: "Email verification failed" });
    }
});
app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});

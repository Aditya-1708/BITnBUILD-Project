const express = require("express");
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const path = require("path");
const jwt = require("jsonwebtoken"); // Adding JWT
const { sendEmail } = require('./EmailService/emailController');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.json());
const saltrounds = 10;
const userController = require("./users/controller");
const secretKey = "your_secret_key"; // Define your secret key for JWT
const authenticateJWT = (req, res, next) => {//middle ware to authenticate the user or admin
    const authHeader = req.cookies.token;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(403).json({ message: 'Token expired' });
                }
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });

    }
    else {
        console.error('Unauthorized access attempt:', req.url);
        res.status(401).json({ message: 'Unauthorized: Token missing' });
    }
};

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
async function compareOTP(OTPReceived, OTPDatabase) {
    try {
        console.log(toString(OTPReceived) + "  " + toString(OTPDatabase))
        return OTPReceived === OTPDatabase;
    }
    catch (error) {
        throw error;
    }
}
app.post('/users/emailOTP', async (req, res) => {
    try {
        const { email } = req.body;
        const otp = await generateOTP();
        await sendEmail(
            'USER',
            `Your OTP is: ${otp}`,
            'Thank you for joining us.',
            `${email}`,
            email
        )
        await userController.addEmailForVerification(email, otp);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post("/users/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userController.checkEmailExists(email);
        let passOk;

        if (!user || user.length === 0) {
            return res.status(400).json({ message: "User does not exist" });
        } else {
            passOk = bcrypt.compareSync(password, user[0].password);
        }
        if (passOk) {
            const token = jwt.sign({ email, role: 'user' }, secretKey, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true, secure: true }).json({ message: 'Login successful' });
        } else {
            res.status(403).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

app.post("/users/logout", async (req, res) => {//allows the user to logout
    try {
        const authToken = req.cookies.token;

        if (!authToken) {
            return res.status(401).json({ message: 'Unauthorized: User not authenticated' });
        }
        res.cookie('token', '', { httpOnly: true, secure: true }).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

app.post('/users/verify', async (req, res) => {
    const { email, OTP } = req.body;

    const results = await userController.getDetailsForVerification(email);

    if (OTP === results[0].otp) {
        res.status(200).json({ message: "Email successfully verified" });
    }
    else {
        userController.deleteEmailIfOTPUnsuccessful(email);
        res.status(400).json({ message: "Email verification failed" });
    }
});

app.post('/users/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, saltrounds);
        const result = await userController.addEmailIfSuccessful(email, hashedPassword);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: 'An error occurred during signup' });
    }
});

app.listen(4000, () => {
    console.log('Server is listening on port 4000');
});


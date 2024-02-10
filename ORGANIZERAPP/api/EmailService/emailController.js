const { EMAIL, PASSWORD } = require('./env.js');
const Mailgen = require('mailgen');
const nodemailer = require('nodemailer');

async function sendEmail(name, intro, outro, subject, userEmail) {
    try {
        let config = {
            service: 'gmail',
            secure: true,
            auth: {
                user: EMAIL,
                pass: PASSWORD,
            },
        };

        let transporter = nodemailer.createTransport(config);
        let mailGenerator = new Mailgen({
            theme: "default",

            product: {
                name: "Mailgen",
                link: "https://mailgen.js/",
            },
        });

        let response = {
            body: {
                name: name,
                intro: intro,
                outro: outro,
            },
        };

        let mail = mailGenerator.generate(response);

        let message = {
            from: EMAIL,
            to: userEmail,
            subject: subject,
            html: mail,
        };

        await transporter.sendMail(message);
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error occurred while sending email:", error);
    }
};

module.exports = {
    sendEmail,
}
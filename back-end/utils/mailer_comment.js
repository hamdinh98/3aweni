const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

// NOTICE : 
// mode : if true => email for registration 
// mode : if false => email for verification identiy for changing the forgetten password  

module.exports = async function main(email,comments ) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.GMAIL_USER, // generated ethereal user
            pass: process.env.GMAIL_PASSWORD, // generated ethereal password
        },
    });

    let info;

  
        info = await transporter.sendMail({
            from: '"aweni" <noreply@example.com>',
            to: email, // list of receivers
            subject: " Your comment has been added ✔", // Subject line
            text: " ", // plain text body
            html: ` Your comment : ${comments.content}     has been added`, // html body
        });

    // send mail with defined transport object

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}





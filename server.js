const nodemailer = require('nodemailer'); 


// Step 1 - Create a transporter object
let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: 'prime.solo.project@outlook.com',
        pass: 'cantaperme04!!'
    }
});


// Step 2 - create an object containing all message data 
let mailOptions = {
    from: 'prime.solo.project@outlook.com',
    to: 'jcady90@gmail.com, jcady90@icloud.com, jeremy.cady@outlook.com, prime.solo.project.gmail.com',
    subject: 'Testing, testing 123',
    text: 'Magical email 🦄'
};


// Step 3 - Send the email
transporter.sendMail(mailOptions, function(error, data) {
    if(error) {
        console.log('send error', error);
    }
    else{
        console.log('email sent 📨');
    }
});
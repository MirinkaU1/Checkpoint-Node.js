var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'cherifmohamedabraham@gmail.com',
    pass: 'hqek jizh qdji mmhy'
    }
});

var mailOptions = {
    from: 'cherifmohamedabraham@gmail.com',
    to: 'cherifmohamedabraham@gmail.com',
    subject: 'Checkpoint Node.js',
    text: 'La Trendy Pink est une team de bg'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé : ' + info.response);
    }
});
// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

// const auth = {
//     auth: {
//         api_key: '4402269907f3f64e1522275cca1d3b52-53c13666-ebc82689',
//         domain: 'sandbox321abc74011645a5ab5332dbb50f8dad.mailgun.org'
//     }
// };

// const transporter = nodemailer.createTransport(mailGun(auth));

// const sendMail = (firstName, lastName, email, phoneNumber, addressLine1, addressLine2, addressCity, addressState, addressZip, addressCountry, comment, cb) => {
//     const mailOptions = {
//         sender: firstName, lastName,
//         from: email,
//         to: 'kadercreate@gmail.com',
//         phoneNumber: phoneNumber,
//         addressLine1: addressLine1,
//         addressLine2: addressLine2,
//         addressCity: addressCity,
//         addressState: addressState,
//         addressZip: addressZip,
//         addressCountry: addressCountry,
//         comment: comment
//     };
//     transporter.sendMail(mailOptions, function(err, data) {
//         if (err) {
//             cb(err, null);
//         } else {
//             cb(null, data);
//         }
//     });
// }

// // Exporting the sendmail
// module.exports = sendMail;
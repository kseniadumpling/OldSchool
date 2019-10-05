const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'emails.json'
);

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ksenia.dumpling@gmail.com',
		pass: 'no way I wrote it here'
	}
});


module.exports = class Email {
	static addEmail(email) {
		this.sendSubscribeMsg(email);
		fs.readFile(p, function (err, data) {
			let file = JSON.parse(data);
			file.push(email);
			fs.writeFile(p, JSON.stringify(file, null, 2), err => {
				if (err) throw err;
				console.log('Append a new email');
			});
		});
	}

	static sendSubscribeMsg(email) {
		const mailOptions = {
			from: 'ksenia.dumpling@gmail.com',
			to: email,
			subject: 'Sending Email using Node.js',
			text: 'That was easy!'
		};

		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
	}
};
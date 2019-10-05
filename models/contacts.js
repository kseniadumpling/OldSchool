const fs = require('fs');
const path = require('path');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'contacts.json'
);

module.exports = class Contact {
	static addContact(info) {
		fs.readFile(p, function (err, data) {
			let file = JSON.parse(data);
			file.push(info);
			fs.writeFile(p, JSON.stringify(file, null, 2), err => {
				if (err) throw err;
				console.log('Append a new contact');
			});
		});
	}
};
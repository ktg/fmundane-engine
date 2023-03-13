import express from 'express';
import path from 'path';
import fs from 'fs';

const multer = require('multer');
const upload = multer({
	dest: 'uploads/',
	limits: {
		fieldSize: 1073741824
	}
});

const indexRouter = express.Router();
indexRouter.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', '..', 'placeholders', 'placeholders.json'));
});
indexRouter.get('/set', (req, res) => {
	const fname = path.join(__dirname, '..', '..', '..', 'placeholders', 'placeholders.json');
	let data = fs.readFileSync(fname);
	let placeholders = JSON.parse(data);
	const { key, value } = req.query;
	if (key && value) {
		placeholders[key] = value;
		let wdata = JSON.stringify(placeholders, null, 4);
		fs.writeFileSync(fname, wdata);
	}
	res.status(200).json(placeholders);
});

indexRouter.post('/', upload.array('images', 3), (req, res) => {
	console.log(req.body);
	const fname = path.join(__dirname, '..', '..', 'placeholders', 'placeholders.json');
	let data = fs.readFileSync(fname);
	let placeholders = JSON.parse(data);

	for (const property in req.body) {
		if (property !== 'images' && req.body[property]) {
			console.log(`${property}: ${req.body[property]}`);
			placeholders[property] = req.body[property];
		}
	}

	//for uploading mutiple images
	let uploadedFiles = [];
	console.log(req.files);
	if (req.files) {
		let images = req.files;
		for (let i = 0; i < images.length; i++) {
			uploadedFiles.push(images[i].path);
		}
	}

	fs.writeFileSync(fname, JSON.stringify(placeholders, null, '\t'));
	console.log(placeholders);
	res.status(302).redirect('/wa/upload/');
});
export default indexRouter;
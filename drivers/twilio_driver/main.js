require('console-stamp')(console, 'dd-mm-yy HH:MM:ss.l');

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = '9109';

const { twilioAccountId, twilioAccountAuth, twilioAccountNumber } = require('./settings.json');

const client = require('twilio')(twilioAccountId, twilioAccountAuth);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/sms', async function(req, res, next) {
	console.log(req.body.sms)
	const messageInstance = await client.messages.create({
		body: req.body.sms.message,
		to: req.body.sms.phone.replace(/^0/, '+44'),
		from: twilioAccountNumber,
	});
	console.log(messageInstance);
	res.status(200).send('OK');
});

http.createServer(app).listen(PORT);
console.log('listening on port: ' + PORT);

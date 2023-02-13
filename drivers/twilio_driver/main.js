require('console-stamp')(console, 'dd-mm-yy HH:MM:ss.l');

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = '9107';

const {phoneNumber, twilioAccountId, twilioAccountAuth, twilioAccountPhone} = require('./settings.json')

const client = require('twilio')(twilioAccountId, twilioAccountAuth);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/sms', async function(req, res, next) {
	const { sms } = req.body;
	const { message = '', to = phoneNumber } = sms;
	console.log('seen sms', JSON.stringify(sms, null, 4));

	const messageInstance = await client.messages.create({
		body: message,
		to: to,
		from: twilioAccountPhone,
	});
	console.log(messageInstance);
	res.status(200).send('OK');
});

http.createServer(app).listen(PORT);
console.log('listening on port: ' + PORT);
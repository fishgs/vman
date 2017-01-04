const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile('public/index.html')
})

app.listen('0.0.0.0:80', () => {
	console.log('listen server')
})

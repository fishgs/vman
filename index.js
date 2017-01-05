const express = require('express');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');

const Like = require('./controllers/Like')

const mlab = config.db.url(config.db.user, config.db.pass, config.db.host);

mongoose.connect(mlab);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established! ✓');
});

mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ✗');
  process.exit();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile('public/index.html')
})

app.get('/like', Like.how_much)
app.post('/like', Like.increase)

app.listen('3000', () => {
	console.log('listen server')
})

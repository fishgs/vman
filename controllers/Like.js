const Like = require('../models/Like')

function increase (req, res) {
	Like.find({ count : { $gte: 0 } }, (err, docs) => {
		if (err) throw err;
		console.log('DEBUG:', docs)
		if (docs.length === 0) {
			new Like().save()
		} else {
			docs[0].increase()
		}
		res.sendStatus(200)
	})
}

function how_much (req, res) {
	Like.find({ count : { $gte: 0 } }, (err, docs) => {
		if (err) throw err;
		if (docs.length === 0) {
			res.json({ likes: 0 })
		} else {
			res.json({ likes: docs[0].count })
		}
	})
}

module.exports = { increase, how_much }
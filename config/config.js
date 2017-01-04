module.exports = {
	db: {
		user: '',
		pass: '',
		host: '',
		url(user, pass, host) {
			return `mongodb://${user}:${pass}@ds113608.mlab.com:13608/${host}`
		}
	}
}
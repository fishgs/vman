module.exports = {
	db: {
		user: 'fff',
		pass: 'jqwerty666',
		host: 'php-mongo',
		url(user, pass, host) {
			return `mongodb://${user}:${pass}@ds113608.mlab.com:13608/${host}`
		}
	}
}
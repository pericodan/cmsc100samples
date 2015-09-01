var mysql = require('mysql');

module.exports = mysql.createConnection({
	host	: 'localhost',
	user	: 'perico',
	password: 'dionisio',
	database: 'perico'
	
});

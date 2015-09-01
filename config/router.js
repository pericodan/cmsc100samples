var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function (router) {
	/*router for students*/
	router.route('/students')   
		.get(student.find)
		.post(student.insert)
		.put(student.update);
	router.route('/students/:snum')
		.delete(student.remove)
		.get(student.findOne); 
	router.route('/degrees')   
		.get(degree.find)
		.put(degree.update)
		.post(degree.insert);
	router.route('/degrees/:id')   
		.get(degree.findOne)
		.delete(degree.remove);
	return router;
};


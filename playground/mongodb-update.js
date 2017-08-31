// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59a75de6cf7e320e62b2d3ee')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		name: 'Jerry'
	}, {
		$set: {
			name: 'Jerronimo'
		}
	},{
		$inc: { age: 34}
	} ,{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59a75deacf7e320e62b2d3ef1';

if(!ObjectID.isValid(id)) {
	console.log('Id not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo);
// });


// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not find.');
// 	}
// 	console.log('Todos', todo);
// }).catch((e) => console.log(e));

User.findById('59a753e8b9e83a0408fa486b').then((user) => {
	if(!user) {
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});
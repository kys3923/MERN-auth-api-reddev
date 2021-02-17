const db = require('./models');

db.User.create({
	name: 'Billy Bob',
	email: 'test1@test.com',
	password: '123123123',
})
	.then((user) => {
		console.log(`😆 Successfully create a user!`);
		console.log(user);
	})
	.catch((err) => {
		console.log(`😖 Error creating user: ${err}`);
		process.exit();
	});

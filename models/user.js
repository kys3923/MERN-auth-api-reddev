const mongoose = require('mongoose');

const options = {
	timestamps: true,
	id: false,
	toJSON: {
		//make pw not visible to the frontend
		virtuals: true,
		transform: (_doc, userDocToReturn) => {
			delete userDocToReturn.password;
			return userDocToReturn;
		},
	},
};

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	options
);

module.exports = mongoose.model('User', userSchema);

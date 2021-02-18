// Require Passport
const passport = require('passport');
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models');
require('dotenv').config();

// Construct the Strategy
const options = {
	secretOrKey: process.env.JWT_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const findUser = (jwt_payload, done) => {
	db.User.findById(jwt_payload.id)
		.then((user) => done(null, user))
		// .catch(err => done(err, null))
		.catch(done);
};

const strategy = new Strategy(options, findUser);

// Register the strategy so passport uses it when we call "passport.authenticate()" in our routes

// initialize passport

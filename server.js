const express = require('express');
const app = express();
require('dotenv').config();

// middleware

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'MERN app API Home' });
});

// Controllers

app.listen(process.env.PORT || 3000, () =>
	console.log(`💰💰Server is running for you ${process.env.PORT || 3000}💰💰`)
);

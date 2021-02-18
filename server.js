require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

// middleware
// cors
// bodyParsing middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'MERN app API Home' });
});

// Controllers
app.use('/api', require('./controllers/auth')); //URL prefix

app.listen(process.env.PORT || 3000, () =>
	console.log(`💰💰Server is running for you ${process.env.PORT || 3000}💰💰`)
);

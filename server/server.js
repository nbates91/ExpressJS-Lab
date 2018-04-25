const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

// Display text on home screen
// app.get('/', (req, res) => {
//     res.send('Hello from the server side!');
// });

// Console logs the requested urls
// app.use((req, res, next) => {
// 	console.log(req.url);
// 	next();
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/voter-form', (req, res) => {
	let name = req.body.name;
	let party = req.body.party;
	console.log(name);
	console.log(party);
	res.send('Thank you for voting!');
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, console.log('Listening on port 3000'));

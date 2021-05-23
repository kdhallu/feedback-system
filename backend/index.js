require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(cors());


// api routes
app.use('/employees', require('./src/routes/employees'));
app.use('/feedback', require('./src/routes/feedback'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;


app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});

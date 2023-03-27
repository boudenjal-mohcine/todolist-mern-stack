const express = require('express')
const BodyParser = require('body-parser')
const db = require('./services/dbconnection')
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 3000;
const app = express();
app.use(BodyParser.json());
app.use(cors());

//header of our requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//connection to database
app.listen(port, () => {
    // perform a database connection when server starts
    db.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
  });

module.exports = app;




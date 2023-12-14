const express = require ('express');
const sequelize = require('./connection.js');
const path = require('path');
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

//const { getUserDataService } = require('./service/getUserData.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(routes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

sequelize
  .sync()
  .then(function () {
    console.log('INFO - Database connected');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database', err);
  })
  .then(app.listen(PORT, () => {
    console.log(`🌎 ==> Now listening on ${PORT}`);
    //getUserDataService();
    }
  ));

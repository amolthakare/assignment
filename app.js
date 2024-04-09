const express = require('express');
const sequelize = require('./database');
const routes = require('./index');

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.static('public'));
app.use('/', routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

const express = require('express');
const sequelize = require('./database');
const routes = require('./index');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.static('public'));
app.use('/', routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

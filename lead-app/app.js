const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const leadRoutes = require('./routes/lead');
const { sequelize } = require('./models/Lead');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/lead', leadRoutes);

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Lead app is running on http://localhost:3001');
    });
});

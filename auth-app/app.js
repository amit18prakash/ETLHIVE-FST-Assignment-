const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/auth');
const { sequelize } = require('./models/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Authentication app is running on http://localhost:3000');
    });
});

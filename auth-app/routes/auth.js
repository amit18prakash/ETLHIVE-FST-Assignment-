const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && bcrypt.compareSync(password, user.password)) {
        res.send('Login Successful');
    } else {
        res.send('Invalid Credentials');
    }
});

router.post('/signup', async (req, res) => {
    const { name, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ name, username, password: hashedPassword });
    res.send('User Registered');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Lead } = require('../models/Lead');

router.post('/create-lead', async (req, res) => {
    const { name, number, email, product } = req.body;
    const newLead = await Lead.create({ name, number, email, product });
    res.send('Lead Created');
});

router.get('/leads', async (req, res) => {
    const leads = await Lead.findAll();
    res.json(leads);
});

router.put('/update-lead/:id', async (req, res) => {
    const { id } = req.params;
    const { name, number, email, product } = req.body;
    await Lead.update({ name, number, email, product }, { where: { id } });
    res.send('Lead Updated');
});

router.delete('/delete-lead/:id', async (req, res) => {
    const { id } = req.params;
    await Lead.destroy({ where: { id } });
    res.send('Lead Deleted');
});

module.exports = router;

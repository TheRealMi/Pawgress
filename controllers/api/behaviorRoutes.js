const router = require('express').Router();
const { Pet, Behavior } = require('../../models');

// Route to get all behaviors
router.get('/', async (req, res) => {
    try {
        const behaviors = await Behavior.findAll({
            include: [{ model: Pet }]
        });
        res.status(200).json(behaviors);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to create a new behavior
router.post('/', async (req, res) => {
    try {
        const newBehavior = await Behavior.create(req.body);
        res.status(201).json(newBehavior);
    } catch (err) {
        res.status(400).json(err);
    }
});
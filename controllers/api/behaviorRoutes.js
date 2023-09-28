const router = require('express').Router();
const { Pet, Behavior, User, Training } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all behaviors for a specific pet
router.get('/:pet_id', async (req, res) => {
    try {
        const behaviors = await Pet.findAll({
            include: [{ model: Behavior }],
            where: {
                id: req.params.pet_id
            }
        });
        res.status(200).json(behaviors);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to create a new behavior 
// Need to figure out how to create for a specific pet using pet_id
router.post('/', async (req, res) => {
    try {
        const newBehavior = await Behavior.create(req.body);
        res.status(201).json(newBehavior);
    } catch (err) {
        res.status(400).json(err);
    }
});

  module.exports = router;
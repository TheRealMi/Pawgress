const router = require('express').Router();
const { Pet, Behavior, User, Training } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all behaviors for a specific pet
router.get('/:pet_id', async (req, res) => {
    try {
        const behaviors = await Behavior.findAll({
            include: [{ model: Pet }, { model: User }],
            where: {
                user_id: req.session.user_id,
                pet_id: req.params.pet_id
            }
        });
        res.status(200).json(behaviors);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to create a new behavior for a specific pet
router.post('/', withAuth, async (req, res) => {
    try {
        const newBehavior = await Behavior.create(req.body);
        res.status(201).json(newBehavior);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route to create a new training log 
router.post('/:behavior_id', withAuth, async (req, res) => {
    try {
      const newTraining = await Training.create({
        ...req.body,
        behavior_id: req.params.behavior_id
      });
  
      res.status(200).json(newTraining);
    } catch (err) {
      res.status(400).json(err);
    }
  });
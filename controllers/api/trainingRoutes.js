const router = require('express').Router();
const { Pet, Behavior, User, Training } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all training logs for a specific behavior
router.get('/:behavior_id', async (req, res) => {
    try {
      const allTrainings = await Training.findAll({
        include: [{ model: Behavior }],
        where: {
            behavior_id: req.params.behavior_id
        }
      });
  
      res.status(200).json(allTrainings);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Route to create a new training log for a specific behavior
router.post('/:behavior_id', async (req, res) => {
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


  module.exports = router;
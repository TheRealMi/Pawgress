const router = require('express').Router();
const{ User, Pet, Behavior, Training } = require('../models');
const withAuth = require('../utils/auth');

// Homepage
router.get('/', function (req, res) {
    res.render('homepage', {logged_in: req.session.logged_in});
})

// Login page
router.get('/login', function (req, res) {
    res.render('login');
})

// Create Account page
router.get('/createaccount',  function (req, res) {
    res.render('createaccount');
})


// Use withAuth to make sure user is logged in before granting access to profile page
router.get('/profile', withAuth, async (req, res) => {

    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        // Join the Pet and Behavior tables associated with the user that is logged in
        include: { model: Pet, include: { model: Behavior } }
      });
  
      const user = userData.get({ plain: true });
      console.log(user);
 
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Populate feed cards with info from db
router.get('/feed', async (req, res) => {
    try {
        // Get all trainings and join with user and pet data
        const trainingData = await Training.findAll({ include: [{model: Behavior, include: [{model: Pet, include: [{model: User}]}]}]});

        // Serialize data so template can read it
        const trainings = trainingData.map((training) => training.get({ plain: true }));

        // Pass serialized data into template
        res.render('feed', {
            trainings,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
  });
  
module.exports = router;

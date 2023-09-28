const router = require('express').Router();
const{ User, Pet, Behavior, Log } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', function (req, res) {
    res.render('homepage');
})

router.get('/login', function (req, res) {
    res.render('login');
})

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
        include: [{ model: Pet }, { model: Behavior }]
      });
  
      const user = userData.get({ plain: true });
 
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/feed', async (req, res) => {
    try {
        // Get all sessions and join with user and pet data
        const logData = await Log.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Pet,
                    attributes: ['name']
                }
            ]
        });

        // Serialize data so template can read it
        const logs = logData.map((log) => log.get({ plain: true }));

        // Pass serialized data into template
        res.render('feed', {
            logs
        });
    } catch (err) {
        res.status(500).json(err)
    }
  });
  
module.exports = router;

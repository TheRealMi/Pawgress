// Establish api routes here
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const behaviorRoutes = require('./behaviorRoutes');
const trainingRoutes = require('./trainingRoutes');

router.use('/users', userRoutes);
router.use('/behaviors', behaviorRoutes);
router.use('/training', trainingRoutes);

module.exports = router;
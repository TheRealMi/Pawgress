// Establish api routes here
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const behaviorRoutes = require('./behaviorRoutes');

router.use('/users', userRoutes);
router.use('/behaviors', behaviorRoutes);

module.exports = router;
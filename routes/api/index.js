const router = require('express').Router();
const tripRoutes = require('./trip-routes');
const travelerRoutes = require('./traveler-routes');
const locationRoutes = require('./location-routes');

router.use('/trips', tripRoutes);
router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);

module.exports = router;

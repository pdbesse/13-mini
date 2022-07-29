const router = require('express').Router();
const { Location, Trips, Traveler } = require('../../models');

router.post('/', (req, res) => {
    Trips.create(req.body)
        .then((trip) => {
            res.status(200).json(trip);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(err);
        })
});

router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trips.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!tripData) {
            res.status(404).json({ message: 'No trip found with that id!' });
            return;
        }

        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

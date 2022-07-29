const router = require('express').Router();
const { Location, Trips, Traveler } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findbyPk(req.params.id);

        if (!locationData) {
            res.status(404).json({ message: 'No location found with that id!' });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    Location.create(req.body)
        .then((location) => {
            res.status(200).json(location);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(err);
        })
});

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with that id!' });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

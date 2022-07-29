const router = require('express').Router();
const { Location, Trips, Traveler } = require('../../models');

// The `/api/travelers` endpoint

router.get('/', async (req, res) => {
    try {
        const travelerData = await Traveler.findAll();
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const travelerData = await Traveler.findbyPk(req.params.id);

        if (!travelerData) {
            res.status(404).json({ message: 'No traveler found with that id!' });
            return;
        }

        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    Traveler.create(req.body)
        .then((traveler) => {
            res.status(200).json(traveler);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(err);
        })
});

router.delete('/:id', async (req, res) => {
    try {
        const travelerData = await Traveler.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!travelerData) {
            res.status(404).json({ message: 'No traveler found with that id!' });
            return;
        }

        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

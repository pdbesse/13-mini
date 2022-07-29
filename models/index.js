const Traveler = require('./traveler');
const Location = require('./location');
const Trips = require('./trips');

Traveler.belongsToMany(Location, {
    through: Trips
});

Location.belongsToMany(Traveler, {
    through: Trips
});

module.exports = {
    Traveler,
    Location,
    Trips
}
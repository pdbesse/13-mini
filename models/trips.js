const {Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: Datatypes.INTEGER
        },
        traveler_amount: {
            type: Datatypes.INTEGER
        },
        traveler_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'traveler',
                key: 'id'
            },
        },
        location_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'trips'
    }
)

module.exports = Trips;
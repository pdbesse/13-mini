const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trip_budget: {
            type: DataTypes.INTEGER
        },
        traveler_amount: {
            type: DataTypes.INTEGER
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveler',
                key: 'id'
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
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
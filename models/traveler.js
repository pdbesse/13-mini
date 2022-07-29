const {Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model {}

Traveler.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING
        },
        email: {
            type: Datatypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'traveler'
    }
)

module.exports = Traveler;
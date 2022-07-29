const {Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'location'
    }
)

module.exports = Location;
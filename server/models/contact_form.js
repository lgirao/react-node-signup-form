const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class contact_form extends Model {} 

contact_form.init(
    {
        email_address: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATEONLY
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: "contact_form"
    }
);

module.exports = contact_form

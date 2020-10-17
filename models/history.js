const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const History = sequelize.define('History', {
        completed: {
            type: DataTypes.DATEONLY,
        },
        createdAt: {
            allowNull: true,  
        },
        updatedAt: {
            allowNull: true, 
        }
    })

    History.associate = (models) => {

        History.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            }
        })
    }
        return History;


}


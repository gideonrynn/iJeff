const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const History = sequelize.define('History', {
        completed: {
            type: DataTypes.DATEONLY,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,  
        },
        updatedAt: {
            type: DataTypes.DATE,
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


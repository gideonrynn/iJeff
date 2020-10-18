const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Task = sequelize.define('Task', {
        description: {
            type: DataTypes.TEXT,
        },
        tank: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.TEXT
        },
        interim: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,  
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true, 
        }
    })

        Task.associate = function(models) {
            Task.hasMany(models.History)
        }
        
        return Task;
}
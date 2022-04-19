const Sequelize = require('sequelize');

// database connection

module.exports = new Sequelize(
    'assignment_1',
    'root',
    'Poulose@007',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);
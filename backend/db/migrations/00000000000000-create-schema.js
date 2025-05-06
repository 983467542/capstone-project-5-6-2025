'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query('CREATE SCHEMA IF NOT EXISTS capstone_project_schema;');
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query('DROP SCHEMA IF EXISTS capstone_project_schema CASCADE;');
    }
};
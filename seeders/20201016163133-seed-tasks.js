'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Tasks', [
       {
        description: 'Water change',
        tank: '1',
        status: '',
        interim: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Scrub decorations',
        tank: '2',
        status: '',
        interim: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Boil airstones',
        tank: '1',
        status: '',
        interim: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Boil airstones',
        tank: '2',
        status: '',
        interim: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});

      // await queryInterface.bulkInsert('History', [{
      //   name: 'John Doe',
      // }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

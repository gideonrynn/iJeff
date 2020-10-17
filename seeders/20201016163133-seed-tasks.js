'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('Tasks', [
       {
        description: 'Water change',
        status: '',
        interim: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Scrub decorations',
        status: '',
        interim: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Boil airstones',
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

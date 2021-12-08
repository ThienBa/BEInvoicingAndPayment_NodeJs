'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('invoices', [
      {
        user_id: 1,
        itemName: 'Item 1',
        rate: 30,
        hours: 2,
        createdAt: '2021-12-07 00:50:34',
        updatedAt: '2021-12-07 00:50:34',
      },
      {
        user_id: 2,
        itemName: 'Item 2',
        rate: 25,
        hours: 5,
        createdAt: '2021-12-07 00:50:34',
        updatedAt: '2021-12-07 00:50:34',
      },
      {
        user_id: 1,
        itemName: 'Item 3',
        rate: 10,
        hours: 3,
        createdAt: '2021-12-07 00:50:34',
        updatedAt: '2021-12-07 00:50:34',
      },
    ], {});
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

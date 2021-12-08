'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        fullname: 'Nguyen Van A',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '0312121221',
        avatar: 'http://localhost:4000/public/images/avatar/defaultAvatar.png',
        createdAt: '2021-12-07 00:50:34',
        updatedAt: '2021-12-07 00:50:34',
      },
      {
        fullname: 'Nguyen Van B',
        email: 'nguyenvanb@gmail.com',
        phoneNumber: '0312121221',
        avatar: 'http://localhost:4000/public/images/avatar/defaultAvatar.png',
        createdAt: '2021-12-07 00:50:34',
        updatedAt: '2021-12-07 00:50:34',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

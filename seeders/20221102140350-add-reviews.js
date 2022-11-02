'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
        title: 'Java Script',
        text: 'ola como vas',
        rating: 1234,
        bootcamp_id: 1,
        user_id: 1
      }
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};

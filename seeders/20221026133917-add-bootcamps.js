'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [
      {
        name: 'Oracle',
        description: 'Compañia oracle',
        website: 'oracle.com',
        phone: '64576652',
        average_rating: 21,
        average_cost: 654,
        user_id: 1
      },
      {
        name: 'Java Script',
        description: 'java para desarrolladores',
        website: 'java.com',
        phone: '645766520',
        average_rating: 22,
        average_cost: 655,
        user_id: 2
      },
      {
        name: 'html 5',
        description: 'lenguaje basico',
        website: 'desarrollo.com',
        phone: '123456789',
        average_rating: 5,
        average_cost: 145,
        user_id: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
        name: 'Oracle',
        description: 'Compañia oracle',
        website: 'oracle.com',
        phone: '64576652',
        average_rating: 21,
        average_cost: 654
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};

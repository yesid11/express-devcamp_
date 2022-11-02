'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
        title: 'Java Script',
        description: 'Desarrollo para js',
        weeks: 12,
        enroll_cost: 12.5,
        minimum_skill: 13.8,
        bootcamp_id: 1
      }
    ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};

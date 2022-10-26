'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   //Add seed commands here.
   
      await queryInterface.bulkInsert('users', [{
        username: 'Cristian',
        email: 'cbo@misena.edu.co',
        password: '123456'
      },
      {
        username: 'Santiago',
          email: 'dsgomez@misena.edu.co',
          password: '123456'
      },
      {
        username: 'Mariana',
          email: 'mcastiblanco@misena.edu.co',
          password: '123456'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

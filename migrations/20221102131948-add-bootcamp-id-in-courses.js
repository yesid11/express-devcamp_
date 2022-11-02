'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //crear la columna 'user_id' fk con users
    //add Column 
    //parametros
    //Tabla en la cual poner la columna 
     //el nombre de la n8euva columna
     //opciones de la nueva columna
     await queryInterface.addColumn('courses',
                                     'bootcamp_id' ,
                                     {
                                        type : Sequelize.INTEGER,
                                       references:{
                                         model:'bootcamps',
                                         key: 'id'
                                       }, 
                                       onUpdate:'CASCADE',
                                       onDelete : 'SET NULL'
                                     }          )
   
   },
   async down (queryInterface, Sequelize) {
     //METODO REMOVE COLUMN
     //parametros : 
     //La tabla de donde vas a remover 
     // la columna que vas a eliminar
     await queryInterface.removeColumn('courses', 'bootcamp_id')
   }
};

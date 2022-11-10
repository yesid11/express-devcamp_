'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username:{ 
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
              unique(value) {
                return User.findOne({where:{username:value}})
                  .then((username) => {
                    if (username) {
                      throw new Error('Ya existe un campo con ese username');
                    }
                  })
              },
              isAlpha: {
                args: true,
                msg : 'username no valido, no puede contener caracteres numericos'
              },
              notNull:{
                args: true,
                msg: 'Debe estar relleno el campo de username'

              },
              notEmpty:{
                args: true,
                msg: 'el campo debe tener contenido'
              }
            }
          },
         
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:{
        args:true,
        msg: "email no valido"
      }
      }
    },
    password:{
      
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[5,10],
          msg:"password no valida"
        }
      }
    },
  
  },
    {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};
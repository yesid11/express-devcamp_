'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Este campo no puede estar vacio"
        }
      }
    },
    
    text:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"este campo no puede estar vacio"
        }
      }
    }, 
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Este campo no puede estar vacio"
        }
      }

    } 
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};
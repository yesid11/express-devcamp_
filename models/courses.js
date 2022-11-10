'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
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
    
    description:{

      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Este campo no puede estar vacio"
        }
      }

    }, 
    weeks:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Este campo debe contener información"
        },
        max:20,
        isInt:{
          args:true,
          msg:"Este campo solo debe tener numeros"
        },
      }
    },
    enroll_cost:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:"Este campo no puede ser vacío"
        },
        isFloat:{
          args:true,
          msg:"Este campo solo debe rellenarse con numeros"
        }
      }
    },

    minimum_skill:{
      type:DataTypes.FLOAT,
      allowNull:false,
      validate:{
        notNull:{
          args: true,
          msg:"Este campo no puede estar vacío"
        }
      }
    } 
  }, {
    sequelize,
    modelName:'courses',
    timestamps:false
  });
  return courses;
};
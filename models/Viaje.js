import { Sequelize } from "sequelize";
import db from "../config/db.js";

//Definimos primer modelo - pasamos la tabla de la db
export const Viaje = db.define('viajes',{
    //columnas de la tabla
    titulo:{
      type: Sequelize.STRING  
    },
    precio:{
        type: Sequelize.STRING  
      },
    fecha_ida:{
        type: Sequelize.DATE  
      },
    fecha_vuelta:{
        type: Sequelize.DATE  
      },
    imagen:{
        type: Sequelize.STRING
      },
    descripcion:{
        type: Sequelize.STRING  
      },
    disponibles:{
        type: Sequelize.STRING  
      },
    slug:{
        type: Sequelize.STRING  
      },


})
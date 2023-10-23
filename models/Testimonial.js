import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales',{
    //columnas de la tabla
    nombre:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
})
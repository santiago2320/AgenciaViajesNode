import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config'


console.log(process.env.DB_HOST);


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.HOST,
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle:1000
    },
});

// para poder importar la conexion desde otro archivo
export default db;
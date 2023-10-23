// Crear el servidor de express es como un apache
// Importamos Express
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from 'dotenv/config'


console.log(process.env.DB_HOST);

const app = express();

// Conectar la db
db.authenticate()
    .then( () =>{
        console.log('Base de datos conectada');
    }).catch(error=>{
        console.log('error',error);
    })

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine','pug');

// Obtener el años actual en el Footer
app.use( (req, res,next)=> {
    const year = new Date();
    // Nos permite pasar variables hacia la vista
    res.locals.actualYear = year.getFullYear();
    res.locals.nameSite = "Agencia de viajes";
    // Para pase al siguiente middleware
    next();
})

// Agregar body parse para leer los datos del form de testimonial
app.use(express.urlencoded({extended:true}))

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/',router)


// Arrancamos el servidor con el metodo .listen- Se debe agregar la variable port para cuando se despliegue produccion
app.listen(port, () =>{
    console.log(`El servidor funciona en el puerto ${port}`);
})
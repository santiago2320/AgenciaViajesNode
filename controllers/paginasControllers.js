import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";


const paginaInicio = async (request,response)=>{ // request - lo que enviamos : res - lo que 

    // Agregamos viajes y testimoniales al arreglo de primiseDb
    // const promiseDb = []
  
    // promiseDb.push(Viaje.findAll({limit: 3}));
    // promiseDb.push(Testimonial.findAll({limit:2}));

    const [viajes,testimoniales] = await Promise.all([
        Viaje.findAll(),
        Testimonial.findAll()
    ])

    try {

        // // Mezclar aleatoriamente de la lista de  viajes y los testimoniales
        const viajesA = shuffleArray(viajes).slice(0,3);
        const testimonialesA = shuffleArray(testimoniales).slice(0,3);
        // // amabas consultas se van a mostrar al mismo tiempo
        // const resultado = await Promise.all(promiseDb);


        response.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajesA,
            testimoniales : testimonialesA
         });
    } catch (error) {
        console.log('error',error);
    }

   
}

// Función para mezclar aleatoriamente un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

const paginaNosotros = (request,response)=>{
    response.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request,response)=>{
    // Consultar BD
    try {
        const viajes = await Viaje.findAll();
        console.log(viajes); 
            response.render('viajes',{
                pagina: 'Próximos Viajes',
                viajes
            });
    } catch (error) {
        console.log('error',error);
    }
    
    
};

const paginaTestimoniales = async (request,response)=>{ 

    try {
        const testimoniales = await Testimonial.findAll();

        response.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        }); 
    } catch (error) {
       console.log('error',error);
    }
        
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    const {slug} = request.params;

    try {
        const resultado = await Viaje.findOne({ where : {slug}})

        response.render('viaje_info',{
            pagina: 'Información viaje',
            resultado
        })
    } catch (error) {
        console.log('error',error);
    }

}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
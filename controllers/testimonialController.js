import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async(req,res) => {
    // Validar el form
    const {nombre,email,mensaje} =  req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'el nombre esta vacio'})
    }
    if(email.trim() === ''){
        errores.push({mensaje: 'el correo esta vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'el mensaje esta vacio'})
    }

    if(errores.length > 0){
        // Consultar testimoniales
        const testimoniales = await Testimonial.findAll();
        // Mostrar la vista de errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else {
        // Almacenarlo en la base de datos
        
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}
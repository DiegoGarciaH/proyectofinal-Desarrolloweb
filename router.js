const express = require('express');
// const session = require('express-session'); // por el momento no se ejecutan
// const passport = require('passport');
// const passportL = require('passport-local');
const router = express.Router()
const conexion = require('./db/conexion');

// La ruta principal, CRUD persona y usuario 
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM persona, usuario', (error, results)=>{
        if (error) throw error;
        res.render('index', {results:results});
    });
})

//  **************************************PERSONAS**********************************
// Ruta para Crear personas
router.get('/crearPersona', (req, res)=>{
    res.render('crearPersona');
})

// Ruta para ver Personas
router.get('/verPersona', (req, res)=>{
    conexion.query('SELECT * FROM persona', (error, results)=>{
        if (error) throw error;
        res.render('verPersona', {results:results});
    });
} )

// Ruta para modificar los datos de las personas
// Escoger la Persona
router.get('/modificarPersona', (req, res)=>{
    conexion.query('SELECT * FROM persona', (error, results)=>{
        if (error) throw error;
        res.render('modificarEliminarPersona', {results:results});
    });
} )

// editar por id
router.get('/modificarPersona/:idPersona', (req,res)=>{    
    const idPersona = req.params.idPersona;
    conexion.query('SELECT * FROM persona WHERE idPersona=?',[idPersona] , (error, results) => {
        if (error) throw error;            
        res.render('modificarPersona.ejs', {persona:results[0]});                   
    });
});

// Eliminacion de persona
// Escoger la Persona
router.get('/eliminarPersona', (req, res)=>{
    conexion.query('SELECT * FROM persona', (error, results)=>{
        if (error) throw error;
        res.render('modificarEliminarPersona', {results:results});
    });
} )

router.get('/eliminarPersona/:idPersona', (req, res) => {
    const idPersona = req.params.idPersona;
    conexion.query('DELETE FROM persona WHERE idPersona = ?',[idPersona], (error, results)=>{
        if (error) throw error;          
            res.redirect('/');         
    })
});


// ****************************   Usuarios  ******************************

// Ruta para Crear usuarios
router.get('/crearUsuario', (req, res)=>{
    res.render('crearUsuario');
})

// Ruta para Ver a los usuarios
router.get('/verUsuario', (req, res)=>{
    conexion.query('SELECT * FROM usuario', (error, results)=>{
        if (error) throw error;
        res.render('verUsuario', {results:results});
    });
})

// Ruta para modificar la informacion de los usuarios
router.get('/modificarUsuario', ( req, res )=>{    
    conexion.query('SELECT * FROM usuario', ( error, results )=>{
        if (error) throw error;
        res.render('modificarEliminarUsuarios', {results:results});
    });
});

// Editar por id
router.get('/modificarUsuario/:idUsuario', ( req, res )=>{    
    const idUsuario = req.params.idUsuario;
    conexion.query('SELECT * FROM usuario WHERE idUsuario=?',[idUsuario] , (error, results) => {
        if (error) throw error;            
        res.render('modificarUsuario', {usuario:results[0]});                   
    });
});

// Ruta para eliminar la informacion de los usuarios
router.get('/eliminarUsuario', ( req, res )=>{    
    conexion.query('SELECT * FROM usuario', ( error, results )=>{
        if (error) throw error;
        res.render('modificarEliminarUsuarios', {results:results});
    });
});
// Eliminacion de usuarios
router.get('/eliminarUsuario/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;
    conexion.query('DELETE FROM usuario WHERE idUsuario = ?',[idUsuario], (error, results)=>{
        if (error) throw error;       
            res.redirect('/');         
    })
});

// *************************Articulos***************************************
// Vista de Articulos
router.get('/verArticulo', ( req, res )=>{
    conexion.query('SELECT * From articulo', (error, results)=>{
        if (error) throw error;
        res.render('articulo', {results:results});
        
    });
})
// Agregar un Articulo
router.get('/agregarArticulo', ( req, res )=>{
    conexion.query('SELECT * From articulo', (error, results)=>{
        if(error) throw error;   
        res.render('agregarArticulo', {results:results});
    });
})

//Modificar el Articulo
router.get('/modificarArticulo/:idArticulo', ( req, res )=>{    
    const idArticulo = req.params.idArticulo;
    conexion.query('SELECT * FROM articulo WHERE idArticulo = ?',[idArticulo] , (error, results) => {
        if (error) throw error;            
        res.render('modificarArticulo', {articulo:results[0]});                   
    });
});

//Venta 
router.get('/realizarVenta', (req, res)=>{
    conexion.query('SELECT * From venta', (error, results)=>{
        if(error) throw error;
        res.render('realizarVenta', {results:results}); 
    });
})

router.get('/verVenta', (req, res)=>{
    conexion.query('SELECT * From venta', (error, results)=>{
        if(error) throw error;
        res.render('verVenta', {results:results});
    });
})


const controllers = require('./controllers/controllers');
const { append } = require('express/lib/response');
// Controladores de funciones de Persona //metodos post
router.post('/guardarPersona', controllers.guardarPersona);
router.post('/actualizarPersona', controllers.actualizarPersona);
//Usuario
router.post('/guardarUsuario', controllers.guardarUsuario);
router.post('/actualizarUsuario', controllers.actualizarUsuario);
//Articulo
router.post('/guardarArticulo', controllers.guardarArticulo);
router.post('/actualizarArticulo', controllers.actualizarArticulo);
//Venta
router.post('/guardarVenta', controllers.guardarVenta);

module.exports = router;


// Aqui van a ir todas las peticiones que se ejecutaran con sql
// requerimos la conexion
const conexion = require('../db/conexion');

//Personas
exports.guardarPersona = ( req, res ) => {
    //Obtenemos las Variables
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const activo = req.body.activo;
    // Insertamos los datos en la bd
    conexion.query('INSERT INTO persona SET ?',{nombre:nombre, correo:correo, activo:activo}, (error, results)=>{
        if (error) throw error;
        res.redirect('/');         
});
}

exports.actualizarPersona = ( req, res )=>{
    // Obtenemos las Variables
    const idPersona = req.body.idPersona;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const activo = req.body.activo;
    // Actualizamos el registro
    conexion.query('UPDATE persona SET ? WHERE idPersona = ?',[{nombre:nombre, correo:correo, activo:activo}, idPersona], (error, results)=>{
        if (error) throw error;          
        res.redirect('/');         
});
};

// Controladores de Usuarios
exports.guardarUsuario = ( req, res )=>{
    // obtenemos los datos del usuario
    const usuario = req.body.usuario;
    const psw = req.body.psw;
    const activo = req.body.activo;
    const tipoUsuario = req.body.tipoUsuario;
    const idPersona = req.body.idPersona;
    // Creamos e insertamos los datos en la bd
    conexion.query('INSERT INTO usuario SET ?',{usuario:usuario, psw:psw, activo:activo, tipoUsuario: tipoUsuario, idPersona:idPersona}, (error, results)=>{
        if (error) throw error;  
        res.redirect('/');         
        
});
}

// Controlador de Modificar Usuario
exports.actualizarUsuario = (req, res)=>{
    // Obtenemos los datos
    const usuario = req.body.usuario;
    const psw = req.body.psw;
    const activo = req.body.activo;
    const tipoUsuario = req.body.tipoUsuario;
    const idPersona = req.body.idPersona;
    const idUsuario = req.body.idUsuario;
    // Actualizamos en la bd
    conexion.query('UPDATE usuario SET ? WHERE idUsuario = ?',[{usuario:usuario, psw:psw, activo:activo, tipoUsuario: tipoUsuario, idPersona:idPersona}, idUsuario], (error, results)=>{
        if (error) throw error;        
        res.redirect('/');         
        
});
};


// Articulo
exports.guardarArticulo = ( req, res )=>{
    // seleccionamos las variables
    const nombreArticulo = req.body.nombreArticulo;
    const descripcion = req.body.descripcion;
    const fecha = req.body.fecha;
    const precioCompra = req.body.precioCompra;
    const precioVenta = req.body.precioVenta;
    const activo = req.body.activo;
    // Creamos la conexion con bd
    conexion.query('INSERT INTO articulo SET ?',{nombreArticulo:nombreArticulo, descripcion:descripcion, fecha:fecha, precioCompra:precioCompra, precioVenta:precioVenta, activo:activo}, (error, results)=>{
        if (error) throw error;  
        res.redirect('/verArticulo');         
});
};
exports.actualizarArticulo = (req, res)=>{
    // Obtenemos los datos
    const nombreArticulo = req.body.nombreArticulo;
    const descripcion = req.body.descripcion;
    const fecha = req.body.fecha;
    const precioCompra = req.body.precioCompra;
    const precioVenta = req.body.precioVenta;
    const activo = req.body.activo;
    const idArticulo = req.body.idArticulo;
    // Actualizamos en la bd
    conexion.query('UPDATE articulo SET ? WHERE idArticulo = ?',[{nombreArticulo:nombreArticulo, descripcion:descripcion, fecha:fecha, precioCompra: precioCompra, precioVenta:precioVenta, activo: activo }, idArticulo], (error, results)=>{
        if (error) throw error;        
        res.redirect('/verArticulo');         
        
});
};

// Venta 
exports.guardarVenta = (req, res)=>{
    const fecha = req.body.fecha;
    const idArticulo = req.body.idArticulo;
    const cantidadArticulos = req.body.cantidadArticulo;
    const costoVenta = req.body.costoVenta;
    const idPersona = req.body.idPersona;
    conexion.query('INSERT INTO venta SET ?',{fecha:fecha, idArticulo:idArticulo, cantidadArticulos:cantidadArticulos, costoVenta:costoVenta, idPersona:idPersona}, (error, results)=>{
        if (error) throw error;             
        res.redirect('/verVenta');         
        
});
};


const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdproyecto'
})

conexion.connect((error)=>{
    if (error) throw error;
      console.log('Connected!')
 });

module.exports = conexion;
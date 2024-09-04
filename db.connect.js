var mysql = require('mysql');
require('dotenv').config(); 

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

con.connect(function(err){
    if(err) throw err;
    console.log('Conectado no banco com sucesso!');
})

module.exports = con; 

const mysql = require('mysql2');
require('dotenv').config();


// Create the connection to database
    const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    });

    let consulta = "";

    //METODO GET
    function consultaUsuario(req,res,next){
    
    if(typeof(req.query.Id) == "undefined"){ consulta = "SELECT * FROM USUARIO"
    } else{ consulta = "SELECT * FROM USUARIO WHERE Id = " + req.query.Id }

    connection.query(
        consulta,
        function(err, results, fields){
            if(err){
                res.json({Error: "Error en el servidor"})
            }
            if(results.length>0){
                res.json({resultado:results})
            } else{
                res.json({Error:"No se encontraron resultados"});
            }
        }
    )
    }

    //METODO POST
    function insertarUsuario(req, res) {
        try
        {
            const {Nombre,Apellido,Telefono} = req.body;

            if(!Nombre || !Apellido || !Telefono)
            {
                return res.json({error: "Faltan datos"});
            }

            consulta = `INSERT INTO USUARIO (Nombre, Apellido, Telefono) VALUES (\"${Nombre}\", \"${Apellido}\", \"${Telefono}\")`

            connection.query(consulta, res.json({Insertado: "Se ha insertado correctamente!"}))
        }
        catch(error)
        {
            res.json({error: "Error en el server"});
        }
    };

    //METODO DELETE
    function eliminarUsuario(req, res)
    {
        consulta = "DELETE FROM USUARIO WHERE ID = " + req.query.Id;
        connection.query(consulta, 
            function(err, results){
                if(err){
                    res.json({Error: "Error en el servidor"})
                }
                if(results.affectedRows>0){
                    res.json({Eliminacion: "Se elimino el usuario correctamente!"})
                } else{
                    res.json({Error:"No se encontro el usuario a eliminar"});
                }
            }
        )
    }

    //METODO PUT
    function modificarUsuario(req, res)
    {
        try
        {
            const {Nombre,Apellido,Telefono} = req.body;

            if(!Nombre || !Apellido || !Telefono)
            {
                return res.json({error: "Faltan datos"});
            }

            consulta = `UPDATE USUARIO SET Nombre=\"${Nombre}\", Apellido=\"${Apellido}\", Telefono=\"${Telefono}\" WHERE Id = ` + req.query.Id;
            connection.query(consulta, res.json({Modificacion: "Se ha modificado el usuario correctamente!"}))
        }
        catch(error)
        {
            res.json({error: "Error en el server"});
        }
    }

    //METODO PATCH
    function actualizarUsuario(req, res)
    {
        try
        {
            const {Nombre,Apellido,Telefono} = req.body;

            if(!Nombre && !Apellido && !Telefono)
            {
                return res.json({error: "Debe enviar por lo menos un campo"});
            }

            consulta = "UPDATE USUARIO SET "
            
            if(Nombre)
            {
                consulta += `Nombre=\"${Nombre}\", `
            }

            if(Apellido)
            {
                consulta += `Apellido=\"${Apellido}\", `
            }

            if(Telefono)
            {
                consulta += `Telefono=\"${Telefono}\", `
            }

            consulta = consulta.substring(0, (consulta.length - 2));
            consulta += " WHERE Id = " + req.query.Id;

            connection.query(consulta, res.json({Actualizacion: "Se ha actualizado el usuario correctamente!"}))
        }
        catch(error)
        {
            res.json({error: "Error en el server"});
        }
    }


module.exports.consultaUsuario=consultaUsuario;
module.exports.insertarUsuario=insertarUsuario;
module.exports.eliminarUsuario=eliminarUsuario;
module.exports.modificarUsuario=modificarUsuario;
module.exports.actualizarUsuario=actualizarUsuario;
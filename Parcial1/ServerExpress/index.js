const express=require('express');
const xmlparser = require('express-xml-bodyparser');
const multer = require('multer');
const path = require('path');
const app=express();
const port=3000;

/*Middlewawre de Aplicacion
app.use('/',(req,res,next)=>{
console.log("Peticion al server");
next();
}, (req,res,next)=>{
    console.log("2da funcion middlewawre");
    next();
}
);
 */

// Middleware incorporado en express
app.use(express.json());
app.use(express.text());
app.use(xmlparser()); 


const folder = path.join(__dirname+'/archivos/'); //Definir una ruta para almacenar archivos que se envian del cliente
const upload = multer({dest:folder}); //Pasarle esa ruta a multer()
app.use(upload.single('archivo')); 
//app.use(upload.none()); 

app.get('/alumnos', (req,res,next)=>{
    console.log(req.query);
    res.sendFile(__dirname+'/index.html');
})
 
app.post('/sistemas/:control', (req,res)=>{
    console.log(req.params)
    res.send("HOLA MUNDO");
})

app.get('/maestros', (req,res)=>{
    console.log(req.body)
    res.send("Hola Mundo!");
})
 
app.post('/prefectos', (req,res)=>{
    //console.log(req.body)
    //res.send("Hola Mundo!");

    console.log(`Se recibio el archivo: ${req.file.originalname}`);
    console.log('Se recibio el formulario:'+JSON.stringify(req.body));
    res.json(req.body);

})

app.use('/', (req,res,next)=>{
    res.status(404).send("Error 404");
})
 
app.listen(port,()=>{
console.log('Server running at http://localhost:3000');
});
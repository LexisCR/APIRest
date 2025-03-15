const express = require('express');
const routerUsuario = require('./Routes/UsuarioRouter');
const app = express();
const winston = require('winston');
const path = require('path')
const logger = winston.createLogger({ 
    level: 'error', 
    format: winston.format.json(), 
    transports: [ 
    new winston.transports.File({ filename: __dirname + '/logs/error.log' }) 
      ] 
    });

const pug = require('pug');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

require('dotenv').config();
let port = process.env.PORT

app.use(express.json());
app.use(express.text());



app.use('/usuarios',routerUsuario.router);

app.use('/', (req,res,next)=>{
    res.status(404).send("Error 404");
})
 
app.listen(port,()=>{
console.log(`Server running at http://localhost:${port}`);
});

app.use((err,req,res,next)=>{  
    logger.error(err.message, {stack: err.stack});
    res.status(500).json({error:err.message}); 
});
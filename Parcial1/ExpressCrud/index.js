const express = require('express');
const routerUsuario = require('./Routes/UsuarioRouter');
const app = express();
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
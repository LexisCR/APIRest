const express = require('express');
const routerUsuario = require('./Routes/UsuarioRouter');
const app = express();
require('dotenv').config();
const swaggerUI = require('swagger-ui-express'); 
const swaggerJsDoc = require('swagger-jsdoc');
const redoc = require("redoc-express");

const swaggerOptions = { 
    definition: { 
    openapi: '3.0.0', 
    info: { 
    title: 'API de Usuarios', 
    version: '1.0.0', 
          }, 
    servers:[ 
            { 
    url: "http://localhost:3000" } 
          ],   
        }, 
    apis: ["./Routes/UsuarioRouter.js"], 
      };

const swaggerDocs = swaggerJsDoc(swaggerOptions); 

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.get("/api-docs-json", (req, res) => {res.json(swaggerDocs)});

app.get(
  "/api-redoc",
  redoc({
    title: "API-docs",
    specUrl: "/api-docs-json",
  })
);

const fs = require('fs');
fs.writeFileSync('api-spec.json', JSON.stringify(swaggerDocs, null, 2));

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
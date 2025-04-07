const express = require('express');
const app = express();
const bearer = require('express-bearer-token');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(bearer());

app.post('/login', function(req,res,next){
  let privada = fs.readFileSync(path.join(__dirname, '/Llaves/privada.pem'), 'utf-8')
  var token = jsonwebtoken.sign(req.body, privada, {algorithm: 'RS256'});
  console.log(token);
  res.json({token});
})

app.get('/sistema', verificarToken, function(req, res){
  res.json({mensaje: "Acceso concedido!"})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

function verificarToken(req,res,next){
  console.log(req.headers.authorization);
  if(typeof(req.headers.authorization) == 'undefined'){
    res.json({Error: "Token no enviado"});
  } else{
    let publica = fs.readFileSync(path.join(__dirname, '/Llaves/publica.pem'), 'utf-8')
    let token = req.headers.authorization.substring(7,req.headers.authorization.length);
    jsonwebtoken.verify(token, publica, function(err, decoded){
      if(err){
        res.json({Error: "Acceso denegado"})
      } else{
        next();
      }
    });
  }
}
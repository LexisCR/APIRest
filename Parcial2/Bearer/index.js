const express = require('express');
const app = express();
const bearer = require('express-bearer-token');

// Middleware
app.use(express.json());
app.use(bearer());

app.use((req, res, next) => {
  if (req.token !== 'alex') {
    return res.status(401).json({ message: "Token invalido" });
  }

  next();
});

app.get('/', (req, res) => {
  res.send("Hola mundo!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
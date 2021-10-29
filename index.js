const express = require('express');
// Importamos el routerApi index, que está dentro de routes
const routerApi = require('./routes')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Hola soy el primer endpoint nuevo");
});

app.get('/users', (req, res) => {
  // Con req.query accedemos a los valores que mandamos como petición
  // a tráves de query's (?)
  const { limit, offset } = req.query;
  if (limit, offset) {
    res.json({
      limit,
      offset
    });
  } res.send("No hay parámetros");
})

app.listen(port, () => {
  console.log(`Server iniciado, escuchando en puerto ${port}`);
})

// Usamos su función para pasarle como argumento la app
// El orden de ejecución de la función importa, si usas middlewares
// como el de la línea 7
routerApi(app);

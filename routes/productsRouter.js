const express = require('express');
const faker = require("faker");
// Iniciamos un router, que sería como un sub-app para poder modularizar nuestra app
const router = express.Router();

// Los get heredan el principio del endpoint desde routerApi
// a tráves del uso de app
router.get('/', (req, res) => {
  // Creamos un array de productos, que vamos a utilizar abajo
  const products = [];
  // Creamos una variable, que capture algún ?query llamado size
  const { size } = req.query;
  // En limit, ponemos que su valor sea equivalente al query de size
  // y en caso de no tener ningún query, su valor por defecto será 10.
  const limit = size || 10;

  // Esto, para hacer un loop.
  // Que haga una iteración por el número de veces que tengamos en limit
  for (let index = 0; index <= limit; index++) {
    // En cada iteración vamos a insertar un elemento nuevo en el array
    // Especificamente un producto en este caso
    products.push({
      // Con datos aleatorios generados por un paquete llamado faker
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
    // Este loop tiene como motivo, llenar el array de products
    // con el número de productos que mandemos en el query.
  }

  // Y finalmente mandamos como respuesta, nuestro array
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send("Soy un filter");
})

router.get('/:id', (req, res) => {
  // Con params recogemos los distintos parametros del request
  // en este caso el id sería products/whatever
  // y se llama id debido a que así lo pusimos como parametro
  // de nuestro get, con los dos puntos ':'
  // recogemos esto, con cualquier nombre que le asignemos
  const { id } = req.params
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

// router.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params
//   res.json({
//     categoryId,
//     productId,
//     name: 'Product 2',
//     price: 2000
//   });
// });


// A tráves del metodo post, controlamos las peticiones de esta clase
router.post('/', (req, res) => {
  // Agarramos el request, todo lo que venga ahí y lo metemos dentro de esta variable
  const body = req.body;
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  // Agarramos el request, todo lo que venga ahí y lo metemos dentro de esta variable
  const body = req.body;
  const { id } = req.params
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json({
    message: 'created',
    data: body,
    id
  })
})

router.put('/:id', (req, res) => {
  // Agarramos el request, todo lo que venga ahí y lo metemos dentro de esta variable
  const body = req.body;
  const { id } = req.params
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json({
    message: 'created',
    data: body,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json({
    message: 'deleted',
    id
  })
  // Retornamos este sin body, porque no nos interesa ver esa información
  // solo saber que elemento eliminamos
})

// Exportamos para poder usarla en el routerApi index
module.exports = router

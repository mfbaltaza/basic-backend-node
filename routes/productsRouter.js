const express = require('express');

const ProductsService = require('./../services/productsService')

// Iniciamos un router, que sería como un sub-app para poder modularizar nuestra app
const router = express.Router();
// Creamos una instancia del servicio que creamos
const service = new ProductsService();

// Los get heredan el principio del endpoint desde routerApi
// a tráves del uso de app
router.get('/', (req, res) => {
  const products = service.find();
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
  const product = service.findOne(id);

  if ( id === '999' ) {
    res.status(404).json({
      message: "Not found"
    })
  } else {
    res.status(200).json(product)}
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
  // Creamos una variable que va a mandar nuestro body al servicio
  const newProduct = service.create(body)
  // Por lo que tendremos como respuesta nuestros datos del nuevo producto
  // En caso de que todo haya sido ejecutado de forma correcto
  res.status(201).json(newProduct)
})

router.patch('/:id', (req, res) => {
  // Agarramos el request, todo lo que venga ahí y lo metemos dentro de esta variable
  const body = req.body;
  const { id } = req.params
  const updatedProduct = service.update(id, body);
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json(updatedProduct);
})

router.put('/:id', (req, res) => {
  // Agarramos el request, todo lo que venga ahí y lo metemos dentro de esta variable
  const body = req.body;
  const { id } = req.params
  const updatedProduct = service.update(id, body);
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json(updatedProduct);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const deletedProduct = service.delete(id)
  // Para retornar un JSON con la data que se encuentra dentro del body.
  res.json(deletedProduct)
  // Retornamos este sin body, porque no nos interesa ver esa información
  // solo saber que elemento eliminamos
})

// Exportamos para poder usarla en el routerApi index
module.exports = router

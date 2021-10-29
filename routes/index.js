// Traemos nuestro código modularizado previamente exportado con require
const productsRouter = require('./productsRouter')
// const usersRouter = require('./usersRouter')

// Creamos una función llamada routerapi
// que recibirá app como párametro desde el index principal
function routerApi(app) {
  app.use('/products', productsRouter);
}

module.exports = routerApi;

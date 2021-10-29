// Creamos un servicio aquí, estos se manejan como clases

const faker = require("faker");

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate () {
    // En limit, ponemos que su valor por defecto será 100.
    const limit = 100;
    // Esto, para hacer un loop.
    // Que haga una iteración por el número de veces que tengamos en limit
    for (let index = 0; index <= limit; index++) {
      // En cada iteración vamos a insertar un elemento nuevo en el array
      // Especificamente un producto en este caso
      this.products.push({
        // Con datos aleatorios generados por un paquete llamado faker
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
      // Este loop tiene como motivo, llenar el array de products
      // con el número de productos que mandemos en el query.
    }
  }

  create() {}

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update() {}

  delete() {}

}

module.exports = ProductsService;

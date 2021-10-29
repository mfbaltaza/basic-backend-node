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

  // Reciberemos como argumento data JSON para crear nuestro producto...
  create(data) {
    // Creamos la variable para un producto nuevo
    // En dónde nos toca a nosotros generarle un id
    const newProduct = {
      id: faker.datatype.uuid(),
      // Y posteriormente hacemos spread de la data que nos proporcione el usuario
      ...data
    }
    // Metemos el producto nuevo en nuestro array
    this.products.push(newProduct);
    // Y retornamos nuestros datos del producto individual
    return newProduct
  }

  find() {
    return this.products
  }

  findOne(id) {
    const name = this.getTotal();
    return this.products.find(item => item.id === id)
  }

  update(id, changes) {
    // Tenemos que encontrar el index de nuestro producto
    const index = this.products.findIndex(item => item.id === id)
    // Si no encuentra su indice, el resultado probablemente sea -1
    // Así que en ese caso, implementamos una comprobación de errores
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index]
  }

  delete(id) {
    // Tenemos que encontrar el index de nuestro producto
    const index = this.products.findIndex(item => item.id === id)
    // Si no encuentra su indice, el resultado probablemente sea -1
    // Así que en ese caso, implementamos una comprobación de errores
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { message: 'deleted', id };
  }

}

module.exports = ProductsService;

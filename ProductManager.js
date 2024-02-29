
import { promises as fs } from "fs";

export default class ProductManager {
  constructor() {
    this.patch = "./productos.txt";
    this.products = [];
  }
  static id = 0;

  addProduct = async (title, description, price, code, thumbnail, stock) => {
    ProductManager.id++;
    let newProduct = {
      title,
      description,
      price,
      code,
      thumbnail,
      stock,
      id: ProductManager.id,
    };

    // console.log(newProduct);

    this.products.push(newProduct);

    await fs.writeFile(this.patch, JSON.stringify(this.products, "/n"));
  };

  readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8");
    return JSON.parse(respuesta);
  };

  getProducts = async () => {
    let respuesta2 = await this.readProducts();
    return console.log(respuesta2);
  };

  getProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    // let filter = respuesta3.find(product => product.id === id)


    if (!respuesta3.find((product) => product.id === id)) {
      console.log("Producto no encontrado");
    } else {
      console.log(respuesta3.find((product) => product.id === id));
    }
  };
  deleteProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter((products) => products.id != id);
    console.log(productFilter);
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
  };
  upDateProducts = async ({ id, ...producto }) => {
    await this.deleteProductById(id);
    let productOld = await this.readProducts();
    // console.log(productOld);
    let productsModif = [{ id, ...producto }, ...productOld];
    await fs.writeFile(this.patch, JSON.stringify(productsModif));
  };
}



//const productos = new ProductManager();

// productos.addProduct('Mesa', 'Madera', 10000 , 'thumbnail1', 'abc1', 10)
// productos.addProduct('Mesa', 'Vidrio',10000, 'thumbnail2', 'abc2', 10)
// productos.addProduct('Mesa', 'Familiar',10000, 'thumbnail3', 'abc3', 10)
// productos.addProduct('Silla', 'Madera',10000, 'thumbnail4', 'abc4', 10)
// productos.addProduct('Silla', 'Metal',10000, 'thumbnail5', 'abc5', 10)
// productos.addProduct('Silla', 'Escandinava',10000, 'thumbnail6', 'abc6', 10)
// productos.addProduct('Silla', 'Tipo industrial',10000, 'thumbnail7', 'abc7', 10)
// productos.addProduct('Ventanaa', 'Madera',10000, 'thumbnail8', 'abc8', 10)
// productos.addProduct('Ventana', 'Vidrio',10000, 'thumbnail9', 'abc9', 10)
// productos.addProduct('Ventana', 'Ventanal',10000, 'thumbnail10', 'abc10', 10)

//test:

//productos.getProducts();
// productos.getProductById(11);
// productos.deleteProductById(4)
// productos.upDateProducts({
//   title: "Mesa",
//   description: "Madera",
//   price: 5000,
//   code: "abc1",
//   thumbnail: "thumbnail1",
//   stock: 10,
//   id: 1,
// });

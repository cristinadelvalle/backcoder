import express from "express";
import { ProductManager } from "./ProductManager.js";
import { productsRouter} from "./routes/products.router.js"

const port = 8080;

const app = express()

export const productManager = new ProductManager

app.use(express.json())

app.use('/api/products', productsRouter)

app.listen(port, (req, res)=> {
    console.log(`Servidor listo ${port}`);
})










// const app = express()
// app.use(express.urlencoded({ extended: true }))
// const productos = new ProductManager()
// const readProducts = productos.readProducts()
// app.get('/products', async (req, res) => {

//     let limit = parseInt(req.query.limit)

//     if (!limit) return res.send(await readProducts)

//     let allProduct = await readProducts

//     let productLimit = allProduct.slice(0, limit)

//     res.send(productLimit)
// })

// app.get('/products/:id', async (req, res) => {

//     let id = parseInt(req.params.id)

//     let allProduct = await readProducts

//     let productById = allProduct.find(product => product.id === id)

//     res.send(productById)
// })

// const port = 8080
// const server = app.listen(port, () => {

//     console.log(`Express por local host ${server.address().port}`);
// })
// server.on('error', (error) => console.log(`Error del servidor ${error}`))





















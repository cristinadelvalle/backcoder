import { Router } from "express"; 
import { productManager } from "../index.js";
  
const productsRouter = Router()

productsRouter.get('/', async (req, res) =>{
    try{
        const [limit] = req.query

        const products = await productManager.getProducts()

        if(limit){
            const limitedProducts = products.slice[0, limit]
            return res.json(limitedProducts)
        }
        return res.json(products)

    }catch(error){
        console.log(error);
        res.send('Error al recibir los productos')
    }
} )

productsRouter.get('/:pid', async(req, res)=>{
         const [pid]= req.params
    try {
        const products = await productManager.getProductById(pid)
        res.json(products)
    } catch (error) {
        console.log(error);
        res.send(`Error al recibir el producto ${pid}`)
    }
})

productsRouter.post('/', async(req, res)=>{
    try {
        const[title, description, price, code, status = true , thumbnail, stock] = req.body
        const response = await productManager.addProduct({title, description, price, code, thumbnail, status, stock});
        res.json(response)
    }
     catch (error) {
        console.log(error);
        res.send('Error al agregar  un producto')
    }
})

productsRouter.put('/:pid', async (req, res)=>{
    const [pid]= req.params
    try {       
     const  [title, description, price, code, thumbnail, stock] = req.body
     const response = await productManager.updateProduct(pid, 
        {title, description, price, code, thumbnail, stock})
        res.json(response)
    } catch (error) {
        console.log(error);
        res.send(`Error al agregar  un producto${pid}`)
    }
    
})

productsRouter.delete('/:pid', async(req, res)=>{
   const [pid] = req.params
   try {
    await productManager.deleteProduct(pid)
    res.send('Producto eliminado')
   } catch (error) {
    console.log(error);
    res.send(`Error al eliminar producto${pid}`)
   }
})



export { productsRouter}
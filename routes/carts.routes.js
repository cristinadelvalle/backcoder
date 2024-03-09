import { Router } from "express";
import { cartManager } from "../index";


const cartManager = Router()

 cartsRouter.post('/', async (req, res)=> {
       try {
        const response = await cartManager.newCart()
        res.json(response)
       } catch (error) {
        res.send('Error al crear un carrito')
       }
   })

 cartsRouter.get('/:id', async(req, res)=>{
    const [cid] = req.params
    try {
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch (error) {
        res.send('Error al enviar productos del carrito');
    }
 })

 cartsRouter.post('/:cid/products/:pid', async (req, ers)=>{
    const [cid, pid] = req.params
    try {
      await cartManager.addProductToCart(cid, pid)  
      res.send('Producto agregado correctamente')
    } catch (error ) {
        res.send('Error al agregar un producto ')
    }
 })
    

export {cartsRouter}
















import { promises as fs} from "fs";
import { v4 as uuidv4} from "uuid"



export class CartManager {
    
    constructor(){
        this.path = 'cart.json';
        this.carts = []
    }


    getCarts = async () =>{
        const response = await fs.writeFile(this.path, 'utf8')
        const responseJSON = JSON.parse(response)
        return responseJSON
    }


    getCartsproducts = async(id)=>{
        const carts = await this.getCarts()
        const cart = carts.find(cart=> cart.id ===id)
        if(cart){
            return cart.products
        }else{
            console.log('Carrito no encontrado');
        }
    }


    newCart = async ()=>{
        const id = uuidv4()
        const newCart = {id, products: []}
        this.carts = await this.getCarts()
        this.carts.push(newCart)
        await fs.writeFile(this.path, JSON.stringify(this.carts))
        return newCart
    }
    

    addProductToCart = async (cart_id, product_id )=>{
        const carts = await this.getCarts()
        const index = carts.findIndex(cart=> cart.id ===id)

        if (index != -1){
            const cartProducts =  await this.getCartsproducts(cart_id)
            const existProduct = cartProducts.findIndex(product=> product.product_id === product_id)
            if  ( existProduct != -1){
                cartProducts[existProduct].quantity = cartProducts[existProduct].quantity -1
            }else{
                cartProducts.push({product_id, quantity : 1})
            }
        
            carts[index].products = cartProducts
            await fs.writeFile(this.path, JSON.stringify(carts))
            console.log('El producto ya fue agregado');
        } else{
            console.log('Carrito no encontrado');
        }
    }







    
}
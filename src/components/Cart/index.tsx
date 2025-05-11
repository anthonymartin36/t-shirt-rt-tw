import React from 'react'
import { Menu } from '@headlessui/react' //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { getAllCartApi, updateCartQuantityApi} from '../../apis/cart' //, addQuantityToCartItemApi 
import {useState, useEffect} from 'react' 
import { CartTypeWithProductextendImage } from '../../modules/Cart/types' // Ensure CartType is imported
import Button from '../Button'
//import * as dotenv from 'dotenv' // import
 // Ensure this is the correct path to your config

interface WishlistProps {
    darkMode: boolean;
}

//dotenv.config()
const base_url = import.meta.env.VITE_NODE_FRONT_URL

const Cart: React.FC<WishlistProps> = ({ darkMode }) => {
    const [cart, setCart] = useState<CartTypeWithProductextendImage[]>([]) 

    useEffect(() => {
        // Fetch cart data from the API
        const fetchCart = async () => {
            try {
                const cartData = await getAllCartApi() // Call the API
                setCart(cartData) // Update the cart state with the fetched data
            } catch (err) {
                console.error('Error fetching cart data:', err)
            }
        };

        fetchCart() // Call the fetch function
    }, [])
    
    //console.log("Cart : ", cart.length)
    let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
	return (
    <>
    <div>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                <FontAwesomeIcon icon={faShoppingBag} className="text-xl" /> 
                    <span 
                        id="cart-count" 
                        className="absolute -top-2 -right-2 bg-highlight bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                    >{cart.length}
                    </span>
            </Menu.Button>
       
            <Menu.Items
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                { cart.map(item => {
                    return (
                        <div key={`${item.id}`} id={`${item.id}`}>
                        <Menu.Item>
                        
                        <div className="grid grid-cols-2 content-center gap-4 ml-2 text-sm">
                            <div className="text-left"> <img src={`${base_url}/${item.product.image.image_url}`} alt={item.product.image.image_alt} className="w-20 h-15 " />
                            </div>
                            <div className="text-left">
                            {item.product.image.image_name} 
                            <br />
                            Quantity :  
                            <br />
                            <div className="">
                            <form>
                            <Button 
                            type="submit"
                            text=" - "
                            handleClick={() => updateCartQuantityApi(item.id, {quantity: 17 })} />
                            </form> 
                            </div>
                            {item.quantity} 
                            <form>
                            <Button 
                            type="submit"
                            text=" + "
                            handleClick={() => updateCartQuantityApi(item.id, {quantity: 27})} />
                            </form>                           
                            </div>
                            </div>
                        </Menu.Item>
                        <div className="py-1" />
                        <div className="border-b border-gray-200" />
                        <div className="py-1" />
                        </div>
                    )})}
            </Menu.Items>
        </Menu>
    </div>
    </>
	)
}


export default Cart
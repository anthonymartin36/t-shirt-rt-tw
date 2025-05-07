import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { getAllCartApi } from '../../apis/cart'
//import { CartType } from '../../modules/Cart/types'
import {useState, useEffect} from 'react'
//import { CartType } from '../../modules/Cart/types'
import { CartType } from '../../modules/Cart/types' // Ensure CartType is imported

interface WishlistProps {
    darkMode: boolean;
}

// What do I want in this component - 
// 1) Get a Number of all the wishlist items and display them in the FontAwesome > Span 
// 2) Be able to see a list of all the items in the wishlist items on Action > Dropdown
// 3) Be able to remove the items from the wishlist
// 4) Be able to increase/decrease the items on the wishlist// Explicitly define the type as CartType[]
const Cart: React.FC<WishlistProps> = ({ darkMode }) => {
    const [cart, setCart] = useState<CartType[]>([]) 

    useEffect(() => {
        // Fetch cart data from the API
        const fetchCart = async () => {
            try {
                const cartData = await getAllCartApi(); // Call the API
                setCart(cartData) // Update the cart state with the fetched data
                
            } catch (err) {
                console.error('Error fetching cart data:', err)
            }
        };

        fetchCart() // Call the fetch function
    }, [])
    
    console.log("Cart : ", cart.length)
    let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
	return (
		<div>
			{/* Cart component content */}
            <div className="relative cart-icon">
            <button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                    <Navbar>
                    <FontAwesomeIcon icon={faShoppingBag} className="text-xl" /> 
                    <span 
                        id="cart-count" 
                        className="absolute -top-2 -right-2 bg-highlight bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        >{cart.length}
                    </span>
                    </Navbar>
                </button>
            </div>
		</div>
	)
}

function Navbar(props: { children: React.ReactNode }) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

export default Cart
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

interface WishlistProps {
    darkMode: boolean;
}

// const Wishlist: React.FC<WishlistProps> = ({ darkMode }) => {
//     //console.log("Wishlist darkMode : ", darkMode)
//     let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
//     return (
//         <div>
//             {/* <!-- Wishlist Icon with Dropdown --> */}
//             <div className="relative wishlist-icon">
//                 <button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}></button>

const Cart: React.FC<WishlistProps> = ({ darkMode }) => {
    let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
	return (
		<div>
			{/* Cart component content */}
            <div className="relative cart-icon">
            <button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                    <FontAwesomeIcon icon={faShoppingBag} className="text-xl" /> 
                    <span 
                        id="cart-count" 
                        className="absolute -top-2 -right-2 bg-highlight text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        >0
                    </span>
                </button>
                {/* <div className="cart-dropdown">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h3 className="font-medium">Shopping Cart</h3>
                        <a href="#" className="text-sm text-blue-600">View cart</a>
                    </div>
                    <div id="cart-items" className="space-y-2">
                        <p className="text-sm text-gray-500 py-4">Your cart is empty</p>
                    </div>
                    <div id="cart-total" className="border-t pt-2 mt-2 hidden">
                        <div className="flex justify-between font-medium">
                            <span>Subtotal:</span>
                            <span>$0.00</span>
                        </div>
                        <a href="#" 
                        className="block mt-4 w-full bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Checkout</a>
                    </div>
                </div> */}
            </div>
		</div>
	)
}

export default Cart
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface CartProps {
    darkMode: boolean;
}

const Wishlist: React.FC<CartProps> = ({ darkMode }) => {
    let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
	return (
		<div>
			{/* <!-- Wishlist Icon with Dropdown --> */}
            <div className="relative wishlist-icon">
                <button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                    <span 
                        id="wishlist-count" 
                        className="absolute -top-2 -right-2 bg-highlight text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        >0
                    </span>
                </button>
                {/* <div className="wishlist-dropdown">
                    <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <h3 className="font-medium">Wishlist</h3>
                        <a href="#" className="text-sm text-blue-600">View all</a>
                    </div>
                    <div id="wishlist-items" className="space-y-2">
                        <p className="text-sm text-gray-500 py-4">Your wishlist is empty</p>
                    </div>
                </div> */}
            </div>
		</div>
	)
}

export default Wishlist
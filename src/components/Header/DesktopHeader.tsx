import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/T-Shirt_shop2.png'
import { DesktopHeaderProps } from './types'
import MenuIcon from './MenuIcon'
import { navigation } from './helper'
import { NavigationType } from './types'
import Toggle from '../Toggle'
import Wishlist from '../Wishlist'
import Authenticate from '../Authenticate'
import Cart from '../Cart'

const DesktopHeader: React.FC<DesktopHeaderProps> = ({setMobileMenuOpen, darkMode, setDarkMode}) => {
    //let colors = darkmode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
	return (
        <nav 
            className="flex items-center justify-between py-12 px-4 lg:px-8" 
            aria-label="Global">
            {/* Logo Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex lg:flex-1">
                <Link to="/" >
                <img src={Logo} alt="T-Shirt Store" className="w-25 rounded-2xl"  />
                </Link>
            </div>
            <MenuIcon setMobileMenuOpen={setMobileMenuOpen} />
            {/* Pages */}
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item: NavigationType) => (
                <div key={item.id}> 
                <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6"
                    >
                    {item.name}
                    </a>
                </div>
                ))}
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            </div>
            {/* Login */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                <div>
                    <Wishlist darkMode={darkMode} />
                </div>
                <div>
                    <Cart darkMode={darkMode} />
                </div>
                <div>
                    <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>                
                <div>
                    <Authenticate />
                {/* <Link to="/login" className="text-sm font-semibold leading-6">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link> */}
                </div>
            </div>
        </div>
        </nav>
	)
}

export default DesktopHeader
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/T-Shirt_shop2.png'
import { RoutesEnum } from '../../routes'
import { DesktopHeaderProps } from './types'
import MenuIcon from './MenuIcon'
import { navigation } from './helper'
import { NavigationType } from './types'
import Toggle from '../Toggle'

const DesktopHeader: React.FC<DesktopHeaderProps> = ({setMobileMenuOpen, darkMode, setDarkMode}) => {
	return (
        <nav className="flex items-center justify-between p-6 lg:p-8" 
        aria-label="Global">
            {/* Logo Section */}
            <div className="flex lg:flex-1">
                <Link to={RoutesEnum.Home} >
                <img src={Logo} alt="T-Shirt Store" className="h-45 w-auto"  />
                </Link>
            </div>
            <MenuIcon setMobileMenuOpen={setMobileMenuOpen} />
            {/* Pages */}
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item: NavigationType) => (
                   
                <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6"
                    >
                    {item.name}
                    </a>
                ))}
            </div>
            {/* Login */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                <Link to={RoutesEnum.Login} className="text-sm font-semibold leading-6">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>

            </div>
        </nav>
	);
};

export default DesktopHeader
import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { HeaderProps } from './types'
import { useDarkMode } from '../../context/DarkModeProvider'

const Header: React.FC<HeaderProps> = () => {
    
    const { darkMode, toggleDarkMode } = useDarkMode()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
	return (
		<header>
			<DesktopHeader 
                setMobileMenuOpen={setMobileMenuOpen}  darkMode={darkMode} setDarkMode={toggleDarkMode}
            />
            <MobileHeader 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen} darkMode={darkMode} setDarkMode={toggleDarkMode}
            />
		</header>
	);
};

export default Header
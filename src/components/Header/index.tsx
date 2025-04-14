import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	return (
		<header>
			<DesktopHeader 
                setMobileMenuOpen={setMobileMenuOpen} 
            />
            <MobileHeader 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen}
            />
		</header>
	);
};

export default Header
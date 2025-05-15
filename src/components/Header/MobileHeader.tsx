import React from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { MobileHeaderProps } from './types'
import Logo from '../../assets/T-Shirt_shop.jpg'
import { XMarkIcon } from "@heroicons/react/16/solid"
import { navigation } from './helper'
import { NavigationType } from './types'
import Toggle from '../Toggle'

const MobileHeader: React.FC<MobileHeaderProps> = ({mobileMenuOpen, setMobileMenuOpen, darkMode, setDarkMode}) => {
    //console.log("mobileMenuOpen : ", mobileMenuOpen)
	return (
		<Dialog 
            as="div" 
            className="lg:hidden" 
            open={mobileMenuOpen} 
            onClose={setMobileMenuOpen}>
            <Dialog.Panel 
            className="fixed inset-y-20 right-20 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center space-x-4">
                    <Link to="/" >
                        <img src={Logo} alt="T-Shirt Store" className="h-10 w-auto rounded-2xl"  />
                    </Link>
                    <button
                        type="button"
                        className={`-m-2.5 rounded-md p-2.5 text-gray-700`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {navigation.map((item: NavigationType) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                            {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
           </Dialog.Panel>
        </Dialog> 
	)
}

export default MobileHeader
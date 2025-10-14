import React from 'react'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import CheckoutDetails from '../../modules/Checkout'

const Checkout: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true)
    
	return (
        <PageLayout>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <div className="mx-auto lg:max-w-4xl sm:max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
                    <h2 className="text-4xl text-red-500 font-bold tracking-tight sm:text-6xl">Checkout Page</h2>
                </div>
                <CheckoutDetails />
                
            <Footer />
        </PageLayout>
	)
}

export default Checkout
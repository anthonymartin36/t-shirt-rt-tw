import React from 'react'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import Footer from '../../components/Footer'

const Wishlist: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true)
    
	return (
        <PageLayout>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                <div>
                    <h1>Wishlist Page</h1>
                </div>
            <Footer />
        </PageLayout>
	)
}

export default Wishlist
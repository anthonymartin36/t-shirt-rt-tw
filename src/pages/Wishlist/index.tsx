import React from 'react'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { getAllWishlistApi } from '../../apis/wishlist'
import { useQuery } from '@tanstack/react-query'
import Wishlistt from '../../modules/Wishlist'

const Wishlist: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true)
    const {
		data: fetchWishlists, 
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['wishlists'],
		queryFn: () => {
		return getAllWishlistApi()
		},
	})

    if (isError) {
		return (
		<div className="flex flex-1 min-h-screen">
			<h1 className="loading-heading">Something's broken!</h1>
		</div>
		)
	}

	if (!fetchWishlists || isLoading) {
		return (
		<div className="flex flex-1 min-h-screen">
			<h1 className="loading-heading">Just a sec!</h1>
		</div>
		)
	}

	return (
        <PageLayout>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div className="mx-auto lg:max-w-4xl sm:max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
				<h2 className="text-4xl text-red-500 font-bold tracking-tight sm:text-6xl">
					Wishlist Page
				</h2>
				<div className="list-none p-4 my-4 rounded-md border border-yellow-200">
					<Wishlistt />
				</div>
            </div>
            <Footer />
        </PageLayout>
	)
}

export default Wishlist
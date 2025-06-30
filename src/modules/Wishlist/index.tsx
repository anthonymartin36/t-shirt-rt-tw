import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFromWishlistToCartApi, getAllWishlistApi } from '../../apis/wishlist'
import { WishlistTypeWithProductextendImage } from './types'
import WishlistCalculation from './WishlistCalculation'
import WishlistItem from './WishlistItem'

const Wishlistt: React.FC = () => {
    const {
		data: wishlists,
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

	if (!wishlists || isLoading) {
		return (
			<div className="flex flex-1 min-h-screen">
				<h1 className="loading-heading">Just a sec!</h1>
			</div>
		)
	}
	const total = wishlists.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0)
	const whislistsId = wishlists.map((wishlist: WishlistTypeWithProductextendImage) => wishlist.id)
	return (
		<div>
            {wishlists.map((wishlist: WishlistTypeWithProductextendImage) => (
				//{total = wishlists.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0)}
				<li key={wishlist.id} className="list-none p-4 my-4 flex rounded-md border border-gray-200">
					<div className="size-1/4 shrink-0 overflow-hidden" >
					<img
						alt={wishlist.product.image.image_alt}
						src={wishlist.product.image.image_url}
						className="size-full object-cover"
					/>
					</div>

					<div className="ml-4 flex flex-1 ">
						<div className="flex flex-1 flex-col">
							<div className="flex-row mt-1 text-sm text-gray-500">
								<p >{wishlist.product.image.image_name}</p>
							</div>
							<div className="flex-row sm:w-1 md:w-1/2 lg:w-1/3 ">
								<WishlistItem quantity={wishlist.quantity} id={wishlist.id} />
							</div>
						</div>
					<div className="flex flex-1 flex-col text-right ">
						<div className="ml-4 font-medium text-gray-900 justify-between h-full">
							{wishlist.quantity >= 2 ? (
							<div className="flex-row" >
								<p> $ {wishlist.product.price}</p>
								<p> times {wishlist.quantity} is $ {(wishlist.quantity * wishlist.product.price).toFixed(2)}</p>
							</div>
							):(
							<div className="flex-row" >
								<p className="ml-4"> $ {wishlist.product.price}</p>
							</div>
							)}
						</div>
						<div className="flex-row sm:w-1 md:w-2/2 lg:w-3/3">
							<WishlistButton id={wishlist.id} />	
						</div>
					</div>
				</div>

				<div className="py-5" />
				<div className="border-b border-gray-800" />
				<div className="py-5" />
                </li>
                ))}
			<WishlistCalculation total={total} id={whislistsId} />
		</div>
	)
}

interface WishlistButtonProps {
    id: number
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ id }) => {

	// I want to add Wishlist item to  Cart
	// using  addFromWishlistToCartApi
	// and mutating the list above 
  	const queryClient = useQueryClient()
	const { mutate: updateFromWishlistToCart } = useMutation<
	any, Error >({
		mutationKey: ['wishlists', id], 
		mutationFn: async () => {
			await addFromWishlistToCartApi(id)
		},
		onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['wishlists'] })
		},
	})

	console.log("Button ID", id)
	return (
		<div key={id} id={id.toString()}>
		<button 
			className="bg-red-500 text-white px-0.75 py-0.25 rounded hover:bg-red-600"
			onClick={() => updateFromWishlistToCart()}
		>
			Add to Cart
		</button>
		</div>
	)
}

export default Wishlistt
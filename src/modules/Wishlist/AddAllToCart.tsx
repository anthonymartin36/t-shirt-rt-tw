import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFromWishlistToCartApi } from '../../apis/wishlist'

interface AddAllToCartProps {
    id: number[];
}

const AddAllToCart: React.FC<AddAllToCartProps> = ({ id }) => {

	const queryClient = useQueryClient()
	const { mutate: updateFromWishlistToCart } = useMutation<
	void, Error, number >({
		mutationKey: ['wishlists'], 
		mutationFn: async (wishlistId: number) => {
			await addFromWishlistToCartApi(wishlistId)
		},
		onSuccess: () => {
		queryClient.invalidateQueries({ queryKey: ['wishlists'] })
		},
	})

	const handleAddAllToCart = () => {
		id.forEach((wishlistId) => {
			updateFromWishlistToCart(wishlistId)
		  })
	}
	return (
		<div>
			<button
				onClick={() => handleAddAllToCart()}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-0.75 py-0.25 rounded"
				>
            	Add All to Cart
            </button>
		</div>
	)
}



export default AddAllToCart
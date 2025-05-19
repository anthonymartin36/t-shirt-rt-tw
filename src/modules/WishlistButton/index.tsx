import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToWishlistApi } from '../../apis/wishlist'

interface WishlistButtonProps {
    productId: number;
}


const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
    const queryClient = useQueryClient()
    const NewWishlist= { product_id: productId, customer_id: 1, quantity: 1 }
    const mutate = useMutation({
        mutationFn: async () => {
            await addToWishlistApi(NewWishlist)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlists'] })
        },
        onError: (error) => {
            console.error('Error adding to wishlist:', error)
        }
    })
    const handleAddToCart = () => {
        mutate.mutate()
    }
    return (
        <button 
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-red-500"
            onClick={()=> handleAddToCart()}
            >
            Add to Wishlist
        </button>
    )
}

export default WishlistButton
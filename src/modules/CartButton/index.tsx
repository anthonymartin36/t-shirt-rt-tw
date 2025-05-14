import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToCartApi } from '../../apis/cart'

interface CartButtonProps {
    productId: number;
}


const CartButton: React.FC<CartButtonProps> = ({ productId }) => {
    const queryClient = useQueryClient()
    const NewCart= { product_id: productId, customer_id: 1, quantity: 1 }
    console.log("Newcart : ", NewCart)
    const mutate = useMutation({
        mutationFn: async () => {
            await addToCartApi(NewCart)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['carts'] })
        },
        onError: (error) => {
            console.error('Error adding to cart:', error)
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
            Add to Cart
		</button>
	)
}

export default CartButton
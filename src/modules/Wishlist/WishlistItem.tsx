import React from 'react'
import { useState } from 'react' 
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { updateWishlistQuantityApi } from '../../apis/wishlist'

interface WishlistItemProps {
    id: number
    quantity: number
}

const WishlistItem: React.FC<WishlistItemProps> = ({ id, quantity }) => {
  const [buttonValue, setButtonValue] = useState(quantity)

  // Access the query client to invalidate or update the cart query
  const queryClient = useQueryClient()

  // Define the mutation for updating the cart quantity
  const { mutate: updateQuantityMutation } = useMutation<
  any, // The type of the data returned by the mutation (if any)
  Error, // The type of the error
  { quantity: any } // The type of the variables passed to the mutation function
  >({
      mutationKey: ['updateWishlistQuantity', id], // Unique key for the mutation
      mutationFn: async ({ quantity }: { quantity: number }) => {
          await updateWishlistQuantityApi(id, { quantity: quantity } )
      },
      onSuccess: () => {
        // Optionally invalidate the cart query to refresh the data
        queryClient.invalidateQueries({ queryKey: ['wishlists'] });
      },
      onError: (error) => {
        console.error('Error updating cart quantity:', error);
  }})

  // Handle button clicks to update the quantity
  const handleDecrement = () => {
    setButtonValue(prevCount => prevCount - 1) // Pass the correct argument
  }

  const handleIncrement = () => {
    setButtonValue(prevCount => prevCount + 1)// Pass the correct argument
  }
  useEffect(() => {
    updateQuantityMutation({ quantity: buttonValue });
  }, [buttonValue])

  return (
    <div key={`${id}`} id={`${id}`} className="flex bg-gray-100 items-center font-medium justify-between mt-1 mx-3 my-1">
      <button
        className="items-center justify-center bg-red-400 hover:bg-red-600 text-white w-5 h-5 rounded-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <span> {buttonValue} </span>
      <button
        className="items-center justify-center bg-red-400 hover:bg-red-600 text-white w-5 h-5 rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}

export default WishlistItem
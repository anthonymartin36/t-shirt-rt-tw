import React from 'react'
import {useState } from 'react' 
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getAllCartApi, updateCartQuantityApi } from '../../apis/cart'
import { CartTypeWithProductextendImage } from './types'
import CartCalculation from './CartCalculation'
//import Cart from '../../components/Cart'

const Cartt: React.FC = () => {
    const {
		data: carts,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['carts'],
		queryFn: () => {
		return getAllCartApi()
		},
	})
	if (isError) {
		return (
			<div className="flex flex-1 min-h-screen">
				<h1 className="loading-heading">Something's broken!</h1>
			</div>
		)
	}

	if (!carts || isLoading) {
		return (
			<div className="flex flex-1 min-h-screen">
				<h1 className="loading-heading">Just a sec!</h1>
			</div>
		)
	}
	const total = carts.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0)
	
	return (
		<div>
            {carts.map((cart: CartTypeWithProductextendImage) => (
				//{total = carts.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0)}
				<li key={cart.id} className="list-none p-4 my-4 flex rounded-md border border-gray-200">
					<div className="size-1/4 shrink-0 overflow-hidden" >
					<img
						alt={cart.product.image.image_alt}
						src={cart.product.image.image_url}
						className="size-full object-cover"
					/>
					</div>

					<div className="ml-4 flex flex-1 ">
						<div className="flex flex-1 flex-col">
							<div className="flex-row mt-1 text-sm text-gray-500">
								<p >{cart.product.image.image_name}</p>
							</div>
							<div className="flex-row sm:w-1 md:w-1/2 lg:w-1/3 ">
								<CartItem quantity={cart.quantity} id={cart.id} />
							</div>
						</div>
					<div className="flex flex-1 flex-col text-right">
						<div className="ml-4 font-medium text-gray-900">
						{cart.quantity >= 2 ? (
							<div >
							<p> $ {cart.product.price}</p>
							<p> times {cart.quantity} is $ {(cart.quantity * cart.product.price).toFixed(2)}</p>
								</div>
						):(
							<p className="ml-4"> $ {cart.product.price}</p>
						)}
						</div>
					</div>

				</div>
				<div className="py-5" />
				<div className="border-b border-gray-800" />
				<div className="py-5" />
                </li>
                ))}
			<CartCalculation total={total} />
		</div>
	)
}


interface CartItemProps {
	id: number
	quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const [buttonValue, setButtonValue] = useState(quantity)

  // Access the query client to invalidate or update the cart query
  const queryClient = useQueryClient()

  // Define the mutation for updating the cart quantity
  const { mutate: updateQuantityMutation } = useMutation<
  any, // The type of the data returned by the mutation (if any)
  Error, // The type of the error
  { quantity: any } // The type of the variables passed to the mutation function
>({
	mutationKey: ['updateCartQuantity', id], // Unique key for the mutation
	mutationFn: async ({ quantity }: { quantity: number }) => {
		await updateCartQuantityApi(id, { quantity: quantity } )
	},
	onSuccess: () => {
	  // Optionally invalidate the cart query to refresh the data
	  queryClient.invalidateQueries({ queryKey: ['carts'] });
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
	<div key={`${id}`} id={`${id}`} className="flex bg-gray-100 items-center font-medium justify-between mt-3 mx-3 my-3">
	  <button
		className="items-center justify-center bg-red-400 hover:bg-red-600 text-white w-5 h-5 rounded-md"
		onClick={handleDecrement}
		//disabled={updateQuantityMutation.isLoading} // Disable button while mutation is in progress
	  >
		-
	  </button>
	  <span> {buttonValue} </span>
	  <button
		className="items-center justify-center bg-red-400 hover:bg-red-600 text-white w-5 h-5 rounded-md"
		onClick={handleIncrement}
		//disabled={updateQuantityMutation.isLoading} // Disable button while mutation is in progress
	  >
		+
	  </button>
	</div>
  )
}

export default Cartt
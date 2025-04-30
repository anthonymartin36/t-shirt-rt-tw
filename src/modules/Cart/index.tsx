import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllCartApi } from '../../apis/cart'
import { CartType } from './types'

const Cart: React.FC = () => {
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
		<div className="loading">
			<h1 className="loading-heading">Something's broken!</h1>
		</div>
		)
	}

	if (!carts || isLoading) {
		return (
		<div className="loading">
			<h1 className="loading-heading">Just a sec!</h1>
		</div>
		)
	}
	return (
		<div>
            {carts.map((cart: CartType) => ( 
                <div key={cart.id}>
                    It's here
                </div>
            ))}
		</div>
	)
}

export default Cart
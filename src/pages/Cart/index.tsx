import React from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { getAllCartApi } from '../../apis/cart'
import { useQuery } from '@tanstack/react-query'
import { CartTypeWithProductextendImage } from '../../modules/Cart/types'

const Cart: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true)
    let total: number= 0
    const shipping: number = 5.60
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

	return (
        <PageLayout>
			<Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <div className="mx-auto lg:max-w-4xl sm:max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-500 font-bold tracking-tight sm:text-4xl">
                Shopping Cart Page
            </h2>
            <div className="list-none p-4 my-4 rounded-md border border-yellow-200">
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

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <Link to={`${cart.product.id}`}>{cart.product.name}</Link>
                        </h3>
                        {cart.quantity >= 2 ? (
                            <div className="ml-4 text-right">
                            <p> $ {cart.product.price}</p>
                            <p> times {cart.quantity} is $ { cart.quantity * cart.product.price}</p>
                             </div>
                        ):(
                            <p className="ml-4"> $ {cart.product.price}</p>
                        )}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{cart.product.image.image_name}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty {cart.quantity}</p>
                        <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Remove
                        </button>
                        </div>
                    </div>
                    </div>
                        <div className="py-5" />
                        <div className="border-b border-gray-800" />
                        <div className="py-5" />
                </li>
                ))}
                <div className="p-5">
                    <div className="flex justify-between mt-4">
                        <div className="text-left"> GST (%15)</div>
                        <div  className="text-right"> 
                            $ {(carts.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0) *.15).toFixed(2)}
                        </div> 
                    </div>
                    <div  className="flex justify-between mt-4">
                        <div className="text-left">Shipping (NZ Courier)</div>
                        <div className="text-right"> $ 5.60 </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="text-left hidden">{total = carts.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0)}</div>
                        <div className="text-left"> Total </div>
                        <div  className="text-right"> 
                            $ { shipping + total + parseInt((total*.15).toFixed(2)) }
                        </div> 
                    </div>
                    <div className="flex justify-between text-right font-medium text-gray-900">
                    </div>
                    <div className="py-2" />
                    <div className="border-b border-gray-200" />
                    <div className="py-2" />
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <div className="text-left"> <Link to={`/`}>Continue Shopping</Link> </div>
                        <div className="text-right"> <Link to={`/checkout`}>Checkout</Link> </div> 
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </PageLayout>
	)
}

export default Cart
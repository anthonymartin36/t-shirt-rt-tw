import React from 'react'
import { ProductType } from './types'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsApi } from '../../apis/products'
import { Link } from 'react-router-dom'
//import { products } from './data'

const Products: React.FC = () => {
	
	const {
		data: products,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['products'],
		queryFn: () => {
		return getAllProductsApi()
		},
	})

	if (isError) {
		return (
		<div className="loading">
			<h1 className="loading-heading">Something's broken!</h1>
		</div>
		)
	}

	if (!products || isLoading) {
		return (
		<div className="loading">
			<h1 className="loading-heading">Just a sec!</h1>
		</div>
		)
	}	
	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:sm-24 lg:max-w-7xl lg:px-9">
			<h2 className="sr-only">Products</h2>
			<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
			{products.map((product: ProductType) => ( 
				<div key={product.id}>
					<IndividualProduct product={product} />
				</div>
			))}
			</div>
		</div>
	)
}

function IndividualProduct({ product }: { product: ProductType }) {

	return (
		<div className="group relative">
			<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-3 xl:aspect-w-7">
				
			</div>					<Link to={`/products/${product.id}`} >					
			<img src={product.image.image_url} alt={product.image.image_alt} className="h-45 w-aut rounded-2xl"/>
			<h3 className="mt-4 text-sm">{product.description}</h3>
			<p className="mt-1 text-lg font-medium">{product.price}</p></Link> 
		</div>
	)	
}

export default Products


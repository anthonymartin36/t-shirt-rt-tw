import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import Footer from '../../components/Footer'
import { useQuery } from '@tanstack/react-query'
import { getAProductApi } from '../../apis/products'
import { ProductType } from '../../modules/Products/types'
import CartButton from '../../modules/CartButton/index.tsx'
import WishlistButton from '../../modules/WishlistButton/index.tsx'

const Product: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true)
  
  const { id } = useParams<{ id: string }>()
  let productId = id ? parseInt(id) : 0
    //console.log("Product ID: ", id)
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<ProductType>({ 
    queryKey: ['product', productId],
    queryFn: () => getAProductApi(productId),
    enabled: !isNaN(productId),
  })    
  if (isError) {
    return (
      <div className="flex flex-1 min-h-screen">
        <div className="loading">
          <h1 className="loading-heading">Something's broken!</h1>
        </div>
      </div>
    )
  }
  if (!product || isLoading) {
    return (
      <div className="flex flex-1 min-h-screen">
        <div className="loading">
          <h1 className="loading-heading">Just a Sec!!</h1>
        </div>
      </div>
    )
  }
  if (!product?.image) {
    return (
      <div className="flex flex-1 min-h-screen">
        <div className="loading">
          <h1 className="loading-heading">Image not found!</h1>
        </div>
      </div>
    )
  }
  //console.log("Product: ", product)
	return (
        <PageLayout>
			  <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  max-w-7xl mx-auto">
          {/* Product Image */}
          <div id={`${id}`} className="flex justify-center items-center">
            {product?.image && (
              <img
                src={`../${product.image.image_url}`}
                alt={product.image.image_alt}
                className="h-auto w-full max-w-md rounded-2xl lg:max-w-full"
              />
            )}
          </div>

          {/* Product Details */}
          <div className="m-6 flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold tracking-tight">{product.description}</h3>
            <p className="text-2xl font-medium">${product.price}</p>
            <p className="text-sm mt-1">Including VAT (where applicable)</p>
            <ul className="list-disc pl-5">
              <li>Classic crew neck:</li>
              <li>{product.material}</li>
              <li>{product.colour}</li>
              <li>{product.size}</li>
              <li>{product.stock}</li>
            </ul>
            <p className="mt-4">
              Our premium black t-shirt is made from 100% organic cotton for ultimate comfort and durability. The fabric is pre-shrunk and features a slightly heavier weight for a premium feel.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <CartButton productId={product.id} />
              <WishlistButton productId={product.id} />
            </div>
          </div>
        </div>
        <Footer />
        </PageLayout>
	)
}

export default Product
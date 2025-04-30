import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import { useQuery } from '@tanstack/react-query'
import { getAProductApi } from '../../apis/products'
import Footer from '../../components/Footer'
import { ProductType } from '../../modules/Products/types'


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
		      <div className="flex flex-1 min-h-screen">
            {/* <!-- Product Details --> */}
            <div id={`${id}`} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-16 p-4">
              <div className="flex flex-col">
                
              {product?.image && (
                <img
                  src={`../${product.image.image_url}`}
                  alt={product.image.image_alt}
                  className="h-95 w-auto rounded-2xl"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold tracking-tight">{product.description}</h3>
              <div className="">
                <div className="mt-6">
                  <p className="text-2xl font-medium">${product.price}</p>
                  <p className="text-sm mt-1">Including VAT (where applicable)</p>
                </div>
                <div className="mt-2 space-y-4">
                    <ul className="list-disc pl-5">
                        <li>Classic crew neck:</li>
                        <li>{product.material}</li>
                        <li>{product.colour}</li>
                        <li>{product.size}</li>
                        <li>{product.stock}</li>
                    </ul>
                    <p className="">
                      Our premium black t-shirt is made from 100% organic cotton for ultimate comfort and durability. The fabric is pre-shrunk and features a slightly heavier weight for a premium feel.
                    </p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </PageLayout>
	)
}

export default Product
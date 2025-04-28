import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout'
import Header from "../../components/Header"
import { useQuery } from '@tanstack/react-query'
import { getAProductApi } from '../../apis/products'
import Footer from '../../components/Footer'
//import { ProductType } from './types'

interface ProductType extends image, category {
	id: number
	SKU: string
  description: string
  material: string
  price: string
  stock: number
  colour: string
  size: string
  created_at: string
  updated_at: string
  category_id: number
  image_id: number
  image?: image
  category?: category
}

interface image {
  id: number
  image_url: string
  image_alt: string
  created_at: string
  updated_at: string
}

interface category {
  id: number
  name: string
  created_at: string
  updated_at: string
}

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
  //console.log("Product: ", product)
	return (
        <PageLayout>
			  <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
		      <div className="flex flex-1 min-h-screen">
            <div id={`${id}`} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              {product.image && (
                <img
                  src={`../${product.image.image_url}`}
                  alt={product.image.image_alt}
                  className="h-45 w-auto rounded-2xl"
                />
              )}
              Product page
            </div>
          </div>
        <Footer />
        </PageLayout>
	)
}

export default Product
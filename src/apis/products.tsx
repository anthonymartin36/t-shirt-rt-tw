import request from 'superagent'
import { ProductType } from '../modules/Products/types.tsx'
const rootUrl = import.meta.env.VITE_NODE_API_URL + '/api/v1' 


// GET all products (/api/v1/products)
export async function getAllProductsApi(): Promise<[ProductType]> {
  try {
    const response = await request.get(`${rootUrl}/products`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Products', error)
  }
}

// GET a product (/api/v1/products/:id)
export async function getAProductApi(id: Number): Promise<ProductType> {
  try {
    const response = await request.get(`${rootUrl}/products/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Product', error)
  }
}

// export async function getOneMissingCatApi(catId: number): Promise<MissingCat> {

//   try {
//     const response = await request.get(
//       `${rootUrl}/missingcats/singlecat/${catId}`,
//     )
//     return response.body
//   } catch (error) {
//     console.error(`Error fetching cat with id ${catId}: `, error)
//     throw new Error(`Failed to fetch cat with id ${catId}`)
//   }
// }
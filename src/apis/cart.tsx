import request from 'superagent'
import { CartType } from '../modules/Cart/types'
const rootUrl = import.meta.env.VITE_NODE_API_URL + '/api/v1' 


// GET all products (/api/v1/products)
export async function getAllCartApi(): Promise<[CartType]> {
  try {
    const response = await request.get(`${rootUrl}/carts`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Products', error)
  }
}

// GET a product (/api/v1/products/:id)
export async function getACartApi(id: Number): Promise<CartType> {
  try {
    const response = await request.get(`${rootUrl}/carts/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Product', error)
  }
}
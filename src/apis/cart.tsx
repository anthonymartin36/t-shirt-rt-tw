import request from 'superagent'
import { CartTypeWithProductextendImage } from '../modules/Cart/types'
const rootUrl = import.meta.env.VITE_NODE_API_URL + '/api/v1' 

type QuantityType = {
    id: number
}

type Quantity2Type = {
  id: number
  quantity: {
    quantity: number
  }
}

type CartType = {
  quantity: number
  customer_id: number
  product_id: number
}

// GET all carts (/api/v1/carts)
export async function getAllCartApi(): Promise<[CartTypeWithProductextendImage]> {
  try {
    const response = await request.get(`${rootUrl}/carts`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Carts', error)
  }
}

// GET a carts (/api/v1/carts/:id)
export async function getACartApi(id: Number): Promise<CartTypeWithProductextendImage> {
  try {
    const response = await request.get(`${rootUrl}/carts/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Cart', error)
  }
}

// ADD a missing cat (/api/v1/carts/)
export async function addToCartApi( cartData  : CartType ) { //, token: string
  console.log('cartData: ', cartData )
  try {
    const response = await request
      .post(`${rootUrl}/carts/`)
      .send(cartData)
    return response.body
  } catch (error) {
    throw console.error(`Error adding to Cart `, error)
  }
}

// GET cart quantity (/api/v1/carts/:id/quantity)
export async function getCartQuantityApi(id: number): Promise<QuantityType> {
  try {
    const response = await request.get(`${rootUrl}/carts/${id}/quantity`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Quantity from Cart item', error)
  }
}

// Update Quantity to Cart itemm (/api/v1/carts/:id/update_quantity)
export async function updateCartQuantityApi(id: number, quantity: any): Promise<Quantity2Type> {
  console.log('updateCartQuantityApi: ', id, quantity)
  try {
    const response = await request
      .patch(`${rootUrl}/carts/${id}/update_quantity`)
      .send(quantity)
    return response.body
  } catch (error) {
    throw console.error('Error adding to Cart item quantity', error)
  }
}



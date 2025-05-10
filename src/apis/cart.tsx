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


// GET all products (/api/v1/carts)
export async function getAllCartApi(): Promise<[CartTypeWithProductextendImage]> {
  try {
    const response = await request.get(`${rootUrl}/carts`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Products', error)
  }
}

// GET a product (/api/v1/carts/:id)
export async function getACartApi(id: Number): Promise<CartTypeWithProductextendImage> {
  try {
    const response = await request.get(`${rootUrl}/carts/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Product', error)
  }
}

// GET all products (/api/v1/carts/:id/quantity)
export async function getCartQuantityApi(id: number): Promise<QuantityType> {
  try {
    const response = await request.get(`${rootUrl}/carts/${id}/quantity`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Quantity from Cart item', error)
  }
}

// Update Quantity to Cart itemm (/api/v1/carts/:id/add_quantity)
export async function (id: number, quantity: any): Promise<Quantity2Type> {
  try {
    const response = await request
      .patch(`${rootUrl}/carts/${id}/add_quantity`)
      .send(quantity)
    return response.body
  } catch (error) {
    throw console.error('Error adding to Cart item quantity', error)
  }
}



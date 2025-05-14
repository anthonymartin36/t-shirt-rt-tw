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
export async function getAllWishlistApi(): Promise<[CartTypeWithProductextendImage]> {
  try {
    const response = await request.get(`${rootUrl}/wishlists`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Wishlists', error)
  }
}

// GET a carts (/api/v1/carts/:id)
export async function getAWishlistApi(id: Number): Promise<CartTypeWithProductextendImage> {
  try {
    const response = await request.get(`${rootUrl}/wishlists/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Wishlist', error)
  }
}

// ADD a missing cat (/api/v1/carts/)
export async function addToWishlistApi( cartData  : CartType ) { //, token: string
  console.log('cartData: ', cartData )
  try {
    const response = await request
      .post(`${rootUrl}/wishlists/`)
      .send(cartData)
    return response.body
  } catch (error) {
    throw console.error(`Error adding to Wishlists `, error)
  }
}

// GET cart quantity (/api/v1/carts/:id/quantity)
export async function getWishlistQuantityApi(id: number): Promise<QuantityType> {
  try {
    const response = await request.get(`${rootUrl}/wishlists/${id}/quantity`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Quantity from Wishlist item', error)
  }
}

// Update Quantity to Cart itemm (/api/v1/carts/:id/update_quantity)
export async function updateWishlistQuantityApi(id: number, quantity: any): Promise<Quantity2Type> {
  console.log('updateCartQuantityApi: ', id, quantity)
  try {
    const response = await request
      .patch(`${rootUrl}/wishlists/${id}/update_quantity`)
      .send(quantity)
    return response.body
  } catch (error) {
    throw console.error('Error adding to Wishlists item quantity', error)
  }
}



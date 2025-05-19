import request from 'superagent'
import { WishlistType, WishlistTypeWithProductextendImage } from '../types/wishlist'
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

// GET all carts (/api/v1/wishlists)
export async function getAllWishlistApi(): Promise<[WishlistTypeWithProductextendImage]> {
  try {
    const response = await request.get(`${rootUrl}/wishlists`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Wishlists', error)
  }
}

// GET a carts (/api/v1/wishlists/:id)
export async function getAWishlistApi(id: Number): Promise<WishlistTypeWithProductextendImage> {
  try {
    const response = await request.get(`${rootUrl}/wishlists/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Wishlist', error)
  }
}

// ADD a missing cat (/api/v1/wishlists/)
export async function addToWishlistApi( NewWishlist  : WishlistType ) { 
  try {
    const response = await request
      .post(`${rootUrl}/wishlists/`)
      .send(NewWishlist)
    console.log("New Wishlist : ", NewWishlist, " Response : ", response.body )
    return response.body
  } catch (error) {
    throw console.error(`Error adding to Wishlists `, error)
  }
}

// ADD a missing cat (/api/v1/wishlists/)
export async function addFromWishlistToCartApi( id  : Number ) { 
  try {
    const response = await request
      .post(`${rootUrl}/wishlists/${id}/cart`)
    return response.body
  } catch (error) {
    throw console.error(`Error adding to Wishlists `, error)
  }
}


// GET cart quantity (/api/v1/wishlists/:id/quantity)
export async function getWishlistQuantityApi(id: number): Promise<QuantityType> {
  try {
    const response = await request.get(`${rootUrl}/wishlists/${id}/quantity`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Quantity from Wishlist item', error)
  }
}

// Update Quantity to Cart itemm (/api/v1/wishlists/:id/update_quantity)
export async function updateWishlistQuantityApi(id: number, quantity: any): Promise<Quantity2Type> {
  try {
    const response = await request
      .patch(`${rootUrl}/wishlists/${id}/update_quantity`)
      .send(quantity)
    return response.body
  } catch (error) {
    throw console.error('Error adding to Wishlists item quantity', error)
  }
}



import request from 'superagent'
//import { MissingCat, NewSightedCat, SightedCat } from '../../models/cats'

const rootUrl = import.meta.env.VITE_NODE_ENV + 'products' 

// ----- MISSING CATS ----- //

// GET all products (/api/v1/products)
export async function getAllProductsApi(): Promise<[]> {
  try {
    const response = await request.get(`${rootUrl}/products`)
    return response.body
  } catch (error) {
    throw console.error('Error fetching Products', error)
  }
}

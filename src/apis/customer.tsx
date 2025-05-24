import request from 'superagent'
import { CustomerType } from '../types/customer.tsx'
const rootUrl = import.meta.env.VITE_NODE_API_URL + '/api/v1' 


// GET a product (/api/v1/Customer/:id)
export async function getACustomerApi(id: Number): Promise<CustomerType> {
  try {
    const response = await request.get(`${rootUrl}/customer/${id}`,)
    return response.body
  } catch (error) {
    throw console.error('Error fetching a Customer', error)
  }
}
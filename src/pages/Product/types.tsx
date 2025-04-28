export type ProductType = {
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
    image: image
    category: category
}

type image = {
    id: number
    image_url: string
    image_alt: string
    created_at: string
    updated_at: string
  }
type category = {
    id: number
    name: string
    created_at: string
    updated_at: string
  }
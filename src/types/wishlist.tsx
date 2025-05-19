export type WishlistType = {
    quantity: number
    customer_id: number
    product_id: number
}

export type WishlistTypeWithProductextendImage = {
    id: number
    quantity: number
    customer_id: number
    product_id: number
    product: {
        id: number
        name: string
        description: string
        price: number
        image: {
			id: number
			image_name: string
			image_alt: string
			image_url: string
			created_at : string
			updated_at : string
		}
        category_id: number
        created_at: string
        updated_at: string
    }
}
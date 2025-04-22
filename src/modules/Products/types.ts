export type IndividualProductType = {
    product: ProductType;
  }
  
  // create a type for the products
  export type ProductType = {
    id: number;
    SKU: string;
    description: string;
    material: string;
    price: string;
    stock: number;
    image_id: number;
    size: string;
    colour: string;
    created_at: string;
    updated_at: string; 
    category_id: number;
  }

  // "id": 1,
  // "SKU": "TS-BLK-S",
  // "description": "Classic Black T-Shirt, 100% Cotton",
  // "material": "Premium Cotton",
  // "price": "19.99",
  // "stock": 100,
  // "image_id": 1,
  // "size": "S",
  // "colour": "Black",
  // "created_at": "2025-04-20T03:02:53.382Z",
  // "updated_at": "2025-04-20T03:02:53.382Z",
  // "category_id": 12
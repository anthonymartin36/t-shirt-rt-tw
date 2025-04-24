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
    category: {
      id: number;
      name: string;
    };
    image: {
      id: number;
      image_name: string;
      image_alt: string;
      image_url: string;
    }
  }
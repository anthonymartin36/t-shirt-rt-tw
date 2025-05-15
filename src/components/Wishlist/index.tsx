import React from 'react'
import { Menu } from '@headlessui/react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { getAllWishlistApi, updateWishlistQuantityApi, addFromWishlistToCartApi } from '../../apis/wishlist' // //, updateCartQuantityApi
import {useState } from 'react' 
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

interface darkModeProps {
    darkMode: boolean;
}

//dotenv.config()
const base_url = import.meta.env.VITE_NODE_FRONT_URL

const Wishlist: React.FC<darkModeProps> = ({ darkMode }) => {
    //const [cart, setCart] = useState<CartTypeWithProductextendImage[]>([]) 
    const { data: fetchWishlist, isLoading, isError} = useQuery({
        queryFn: () => getAllWishlistApi(),
        queryKey: ["wishlist"]  
    })
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error </div>

    let colors = darkMode ? { "normal": 100, "hover" : "400" } : { "normal": 700, "hover" : "900" } 
    return (
    <>
    <div>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`text-gray-${colors.normal} hover:text-gray-${colors.hover} relative`}>
                <FontAwesomeIcon icon={faHeart} className="text-xl" /> 
                    <span 
                        id="cart-count" 
                        className="absolute -top-2 -right-2 bg-highlight bg-red-400 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                    >{fetchWishlist && fetchWishlist.length}
                    </span>
            </Menu.Button>
            <div>
            <Menu.Items
                className="absolute right-0 z-10 mt-2 w-54 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                { fetchWishlist && fetchWishlist.map(item => {
                    return (
                        <div key={`${item.id}`} id={`${item.id}`}>
                          <Menu.Item disabled>
                            <div className="grid grid-cols-2 content-center gap-4 ml-2 text-sm ">
                              <div className=""> 
                                  <img src={`${base_url}/${item.product.image.image_url}`} alt={item.product.image.image_alt} className="w-20 h-15 " />
                              </div>
                              <div className="">
                                <strong>{item.product.image.image_name}</strong> 
                                <br />
                                <WishlistItem quantity={item.quantity} id={item.id} />
                                <br />
                                <AddFromWishlistToCart id={item.id} />
                              </div>
                            </div>
                          </Menu.Item>
                        <div className="py-1" />
                        <div className="border-b border-gray-200" />
                        <div className="py-1" />
                        </div>
                    )})}
              </Menu.Items>
            </div>
        </Menu>
    </div>
    </>
    )
}
const AddFromWishlistToCart: React.FC<{ id: number }> = ({ id }) => {
  
  const queryClient = useQueryClient()

  const { mutate: addToCartMutation } = useMutation({
    mutationKey: ['addFromWishlistToCart', id], // Unique key for the mutation
    mutationFn: async () => {
      await addFromWishlistToCartApi(id)
    },
    onSuccess: () => {
      // Optionally invalidate the cart query to refresh the data
      queryClient.invalidateQueries({ queryKey: ['wishlists'] });
    },
    onError: (error) => {
      console.error('Error adding to cart:', error);
    }
  })
  const addToCart = () => {
    addToCartMutation() // Trigger the mutation
  }

  return(
    <> 
    <div>
      <button
        className="items-center justify-center bg-red-400 text-white w-20 h-5 rounded-md"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
    </>
  )
}

interface WishlistItemProps {
    id: number
    quantity: number
}

const WishlistItem: React.FC<WishlistItemProps> = ({ id, quantity }) => {
  const [buttonValue, setButtonValue] = useState(quantity)

  // Access the query client to invalidate or update the cart query
  const queryClient = useQueryClient()

  // Define the mutation for updating the cart quantity
  const { mutate: updateQuantityMutation } = useMutation<
  any, // The type of the data returned by the mutation (if any)
  Error, // The type of the error
  { quantity: any } // The type of the variables passed to the mutation function
>({
    mutationKey: ['updateWishlistQuantity', id], // Unique key for the mutation
    mutationFn: async ({ quantity }: { quantity: number }) => {
        await updateWishlistQuantityApi(id, { quantity: quantity } )
    },
    onSuccess: () => {
      // Optionally invalidate the cart query to refresh the data
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
    onError: (error) => {
      console.error('Error updating wishlist quantity:', error);
}})

  // Handle button clicks to update the quantity
  const handleDecrement = () => {
    setButtonValue(prevCount => prevCount - 1) // Pass the correct argument
  }

  const handleIncrement = () => {
    setButtonValue(prevCount => prevCount + 1)// Pass the correct argument
  }
  useEffect(() => {
    updateQuantityMutation({ quantity: buttonValue });
  }, [buttonValue])

  return (
    <div key={`${id}`} id={`${id}`} className="flex items-center justify-between mt-2 mx-2">
      <button
        className="items-center justify-center bg-red-400 text-white w-5 h-5 rounded-md"
        onClick={handleDecrement}
        //disabled={updateQuantityMutation.isLoading} // Disable button while mutation is in progress
      >
        -
      </button>
      <span> {buttonValue} </span>
      <button
        className="items-center justify-center bg-red-400 text-white w-5 h-5 rounded-md"
        onClick={handleIncrement}
        //disabled={updateQuantityMutation.isLoading} // Disable button while mutation is in progress
      >
        +
      </button>
    </div>
  )
}

export default Wishlist
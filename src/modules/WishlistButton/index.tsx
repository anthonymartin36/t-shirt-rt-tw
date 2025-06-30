import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import WishlistItem from '../Wishlist/WishlistItem'
import { useQuery } from '@tanstack/react-query'
import { addToWishlistApi, getWishlistByProductIdApi } from '../../apis/wishlist'
//WishlistTypeWithProductID

interface WishlistButtonProps {
    productId: number;
}

const WishlistButton: React.FC<WishlistButtonProps> = ( {productId} ) => {
    const queryClient = useQueryClient()
    const NewWishlist = { product_id: productId, customer_id: 1, quantity: 1 }
    const [wishlistMember, setWishlistMember] = React.useState<{ wishlistid: number, quantity: number } | null>(null)
    const { 
        data: wishlist,
    } = useQuery<{ wishlistid: number; quantity: number }>({
        queryKey: ['wishlists', productId],
        queryFn: async () => {
            const member = await getWishlistByProductIdApi(productId)
            setWishlistMember({ wishlistid: member.wishlistid, quantity: member.quantity })
            return member
        },
    })

    const { mutate: addToWishlist } = useMutation({
        mutationFn: async (wishlistItem: any) => {
            await addToWishlistApi(wishlistItem)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['wishlists'] })
        },
    })

    const handleAddToCart = () => {
        addToWishlist(NewWishlist)
    }


    if (wishlist && wishlistMember && wishlistMember.wishlistid != 0) {
        //console.log('wishlistMember : ', wishlistMember?.wishlistid, 'quantity : ', wishlistMember?.quantity)
        return (
            <div className="">
            <WishlistItem id={wishlist?.wishlistid} quantity={wishlist?.quantity} />
            </div>
        )
    }
    return (
        <button 
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-red-500"
            onClick={()=> handleAddToCart()}
            >
            Add to Wishlist
        </button>
    )
}

export default WishlistButton    
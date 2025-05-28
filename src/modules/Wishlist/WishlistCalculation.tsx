import { Link } from 'react-router-dom'
//import { CartTypeWithProductextendImage } from './types'
interface WishlistCalculationProps {
    total: number;
}

const WishlistCalculation: React.FC<WishlistCalculationProps>= ({ total }) => {
    let total2: number= Number(total)
    total2 = Number(total2.toFixed(2))
    let gst: number = total2 * 0.15
    gst = Number(gst.toFixed(2))
    const shipping: number = 5.60
    let result: number = total2 + shipping + gst
    result = Number(result.toFixed(2))
    return (
        <div className="p-5">
        <div className="flex justify-between mt-4">
            <div className="text-left"> GST (%15)</div>
            <div  className="text-right"> 
                $ { gst }
            </div> 
        </div>
        <div  className="flex justify-between mt-4">
            <div className="text-left">Shipping (NZ Courier)</div>
            <div className="text-right"> $ {shipping.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-4">
            <div className="text-left hidden">{total2}</div>
            <div className="text-left"> Total </div>
            <div  className="text-right"> 
                $ { result }
            </div> 
        </div>
        <div className="flex justify-between text-right font-medium text-gray-900">
        </div>
        <div className="py-2" />
        <div className="border-b border-gray-200" />
        <div className="py-2" />
        <div className="flex justify-between text-base font-medium text-gray-900">
            <div className="text-left font-medium text-indigo-600 hover:text-indigo-500"> <Link to={`/`}>Continue Shopping</Link> </div>
            <div className="text-right font-medium text-indigo-600 hover:text-indigo-500"> <Link to={`/cart`}>Add All to Cart</Link> </div> 
        </div>
        </div>
	)
}

export default WishlistCalculation
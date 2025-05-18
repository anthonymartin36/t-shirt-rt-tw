import { Link } from 'react-router-dom'
//import { CartTypeWithProductextendImage } from './types'
interface CartCalculationProps {
    total: number;
}

const CartCalculation: React.FC<CartCalculationProps>= ({ total }) => {
    let total2: number= Number(total)
    total2 = Number(total2.toFixed(2))
    let gst: number = total * 0.15
    gst = Number(gst.toFixed(2))
    const shipping: number = 5.60

    return (
        <div className="p-5">
        <div className="flex justify-between mt-4">
            <div className="text-left"> GST (%15)</div>
            <div  className="text-right"> 
                $ { total }
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
                $ { total2 + shipping + gst }
            </div> 
        </div>
        <div className="flex justify-between text-right font-medium text-gray-900">
        </div>
        <div className="py-2" />
        <div className="border-b border-gray-200" />
        <div className="py-2" />
        <div className="flex justify-between text-base font-medium text-gray-900">
            <div className="text-left"> <Link to={`/`}>Continue Shopping</Link> </div>
            <div className="text-right"> <Link to={`/checkout`}>Checkout</Link> </div> 
        </div>
        </div>
	)
}

export default CartCalculation
import React from 'react';
import ShippingDetails from '../../modules/Checkout/ShippingDetails';
import CheckoutCart from '../../modules/Checkout/CheckoutCart' 
import PaymentDetails from '../../modules/Checkout/PaymentDetails'; 


const CheckoutDetails: React.FC = () => {
    return (
        <div className="mx-auto lg:max-w-6xl sm:max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="relative mx-auto lg:max-w-4xl sm:max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Use flexbox to control layout */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left-hand side */}
                    <div className="lg:w-1/2">
                        <ShippingDetails />
                    </div>
                    {/* Right-hand side */}
                    <div className="lg:w-1/2 overflow-auto">
                        <CheckoutCart />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <PaymentDetails />
                </div>
                <div className="lg:w-1/2 overflow-auto">
                    <h2>Customer details</h2>
                    <p>2) Shipping Details</p>
                    <p>3) Payment Details</p>
                    <p>4) Order Summary</p>
                    <p>5) Place Order Button</p>
                    <p>6) Confirmation Message</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutDetails;
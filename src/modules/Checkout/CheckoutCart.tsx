import React from 'react';

const CheckoutCart: React.FC = () => {
	return (
		<div className="float-right bg- p-4 rounded-lg shadow-md w-80">
			
            <h2 className="text-xl font-bold mb-4">Cart Summart</h2>
            <div>
                <p>List of items in cart</p>
                <p>item 1</p>

                <p>Sub Total</p>
                <p>Tax</p>

                <p>Shipping</p>

                <p>Total</p>
            </div>
		</div>
	);
};

export default CheckoutCart;

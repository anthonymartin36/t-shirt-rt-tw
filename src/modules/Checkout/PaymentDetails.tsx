const PaymentDetails: React.FC = () => {
	return (
		<div className="p-4">
			{/* Add your component content here */}
			Payment Details Component
            <p>Form fields for payment details will go here.</p>
            <form className="space-y-4">                
                <div className="flex flex-col">
                    <label htmlFor="cardName"  className="mb-1 font-medium">Name of Cardholder:</label>
                    <input 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" id="cardName" name="cardName" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cardNumber" className="mb-1 font-medium">Card Number:</label>
                    <input 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" id="cardNumber" name="cardNumber" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="expiryDate" className="mb-1 font-medium">Expiry Date:</label>
                    <input 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" id="expiryDate" name="expiryDate" required />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cvv" className="mb-1 font-medium">CVV:</label>
                    <input 
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" id="cvv" name="cvv" required />
                </div>
                <button type="submit">Place Order</button>
            </form>
		</div>
	);
};

export default PaymentDetails;
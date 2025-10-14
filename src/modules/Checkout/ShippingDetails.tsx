import React from 'react';

const ShippingDetails: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="fullName" className="mb-1 font-medium">
                        Full Name:
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="mb-1 font-medium">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="city" className="mb-1 font-medium">
                        City:
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="postalCode" className="mb-1 font-medium">
                        Postal Code:
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="country" className="mb-1 font-medium">
                        Country:
                    </label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    );
};

export default ShippingDetails;
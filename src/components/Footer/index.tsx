import React from 'react';

const Footer: React.FC = () => {
	return (
        <footer className="bg-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-medium mb-4">T-Shirt Shop</h3>
                <p className="text-gray-400">Premium quality clothing for everyone. Designed for comfort and style.</p>
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Shop</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white">Plain T-Shirts</a></li>
                    <li><a href="#" className="hover:text-white">Polo T-Shirts</a></li>
                    <li><a href="#" className="hover:text-white">V-Neck T-Shirts</a></li>
                    <li><a href="#" className="hover:text-white">Raglan T-Shirts</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Help</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white">Customer Service</a></li>
                    <li><a href="#" className="hover:text-white">Track Order</a></li>
                    <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
                    <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">Subscribe for updates and exclusive offers.</p>
                <div className="flex">
                    <input type="email" placeholder="Your email" className="bg-amber-50 px-4 py-2 w-full rounded-l text-gray-900" />
                    <button className="bg-black px-4 py-2 rounded-r hover:bg-gray-800">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 T-Shirt Shop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest-p"></i></a>
            </div>
        </div>
    </footer>
	);
};

export default Footer;
'use client'
import React, { useState } from 'react';

const MyCartPage = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 10.00, quantity: 2 },
        { id: 2, name: 'Product 2', price: 15.00, quantity: 1 },
        { id: 3, name: 'Product 3', price: 20.00, quantity: 3 },
    ]);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">My Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b py-4">
                            <div className="flex items-center space-x-4">
                                <img src={`https://via.placeholder.com/50x50?text=${item.name}`} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-500">{item.price.toFixed(2)}Rs</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity === 1}
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="bg-gray-200 text-gray-700 font-bold py-1 px-2 rounded"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    +
                                </button>
                                <button
                                    className="text-red-500 font-bold"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="mt-8 flex justify-end">
                        <div>
                            <p className="text-xl font-semibold">Total: {getTotalPrice().toFixed(2)} Rs</p>
                        </div>
                    </div>
                        <div className='flex  justify-center'>
                            <button className="mt-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Checkout
                            </button>
                            </div>
                </div>
            )}
        </div>
    );
};

export default MyCartPage;

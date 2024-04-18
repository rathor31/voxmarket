'use client';
import React, { useContext } from 'react';

import useCartContext from '@/context/CartContext';
import { IconTrash } from '@tabler/icons-react';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, cartTotalAmount, addItem, removeItem, clearItem, clearCart } = useCartContext();

  console.log(cartItems);
  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleInputChange = (itemId, newQuantity) => {
    addItem(itemId, newQuantity);
  };

  return (
    <div className='container mx-auto' size="md">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div direction="column">
            {cartItems.map((item) => (
              <div className='' key={item._id} shadow="sm" radius="md" withBorder w={'100%'}>
                <div className='' gutter={5}>
                <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`} alt={item.name} width={'100%'} />
                  <div className='py-20'>

                    <p weight="bold" c="dimmed" tt={'uppercase'}>{item.category}</p>
                    <p weight="bold">{item.title}</p>
                    <h1 >₹{item.price}</h1>
                  </div>
                  <div span={4} py={20}>
                    <button color='red' ml={'auto'} size="xs" variant="outline" onClick={() => handleRemoveItem(item)}>
                      <IconTrash />
                    </button>
                    <input
                      label="Quantity"
                      placeholder="1"
                      value={item.quantity.toString()}
                      onChange={(e) => handleInputChange(item._id, parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div my="md" />
          <div direction="row" justify="space-between">
            <p>Total: ₹{cartTotalAmount.toFixed(2)}</p>
            <div>
              <button onClick={clearCart} variant="outline">Clear Cart</button>
              <button component={Link} href="/user/checkout" variant="filled">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

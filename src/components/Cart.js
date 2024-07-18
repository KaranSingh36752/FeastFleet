import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './CartItem';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className=" flex justify-between w-full">
        <p className="m-3 p-2 text-3xl font-bold ">
          Cart 
        </p>
        <div className='flex mr-10'>
        <button
          className="m-3 mr-10 p-2 text-xl font-bold  bg-[#]  shadow-xl rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        </div>
      </div>
      <div className="mx-4 px-2">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info.id} id={item.card.info.id} {...item.card.info} />
        ))}
      </div>
    </>
  );
};

export default Cart;

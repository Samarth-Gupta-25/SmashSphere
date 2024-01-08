import React from 'react';
import {AiTwotoneDelete} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

function CartItem({item, itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    // toast.success("Item removed from cart");
  }

  return (
    <div className='w-[600px] border-b-2 p-3'>
      <div className='flex gap-4 justify-between'>
        <div className='h-[180px] w-[125px]'>
            <img src={item.image} alt="" className='h-full w-full'/>
        </div>
        <div className='w-[400px] flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <h1>{item.description}</h1>
            <div className='flex justify-between'>
                <p className='text-green-600 font-bold'>₹{item.price}</p>
                <div onClick={removeFromCart} className='text-xl cursor-pointer'>
                    <AiTwotoneDelete/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;

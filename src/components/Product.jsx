import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

function Product({post}) {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    // toast.success("Item added to cart");
  }

  const removeFromCart = () =>{
    dispatch(remove(post.id));
    // toast.success("Item removed from cart");
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-2xl'>
      <div className='text-gray-700 font-semibold text-lg text-left w-40 mt-1'>
        <p>{post.title.substring(0,10)}....</p>
      </div>
      <div className='w-40 text-gray-400 font-normal text-[11px] text-left'>
        <p>{post.description.substring(0,80)}....</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image} alt="product.png" className='h-full w-full'/>
      </div>
      <div className='flex justify-between items-center gap-8 w-full mt-5'>
        <p className='text-green-600 font-semibold'>₹{post.price}</p>
        {
          cart.some((p)=>p.id===post.id) ? 
          (
            <button
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[9px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700 tranisiton duration-300 ease-in'
            onClick={removeFromCart}>Remove Item</button>
          ) : 
          (
            <button 
            className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[9px] p-1 px-3 uppercase hover:text-white hover:bg-gray-700 tranisiton duration-300 ease-in'
            onClick={addToCart}>Add to cart</button>
          )
        }
      </div>
    </div>
  )
}

export default Product;

import React, { useEffect, useState } from 'react';
import Spinner from "../components/Spinner";
import Product from '../components/Product';
import daata from "./data.json";

function Home() {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);

  async function fetchApiData(){
    setLoading(true);
    try{
      // const result = await fetch(API_URL);
      const data = daata;
      setPosts(data);
    }
    catch(error){
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchApiData();
  },[])

  return (
    <div className='w-[60vw] mx-auto mt-[90px] flex justify-between items-center'>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-8 md:spaxe-x-20 lg:space-x-5 min-h-[80vh]'>
          {posts.map((post)=>(<Product key={post.id} post={post}/>))}
        </div>) : 
        <div className='flex justify-center items-center'>
          <p>"No data found</p>
        </div>
      }
    </div>
  )
}

export default Home;

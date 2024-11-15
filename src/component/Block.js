
// Block.js
// import React from 'react';
// import Shimmer from './ShimmerUI';

// function Block(){
// return (
//   <div className='restaurant-card'>
//     {Array(20).fill("").map((e,index)=>(
//     <div key={index} className='shimmercard'></div>
//     ))}
//   </div>
// )
// }
// export default Block;

import Shimmer from "./ShimmerUI";
const Block = () => (
  <div className="block">
         <>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </>
   </div>
);

export default Block;

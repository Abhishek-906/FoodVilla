// import React from "react";

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, sla, cuisines }) => {
  let cuisinesList = cuisines[0];
  for (let i = 1; i < cuisines.length; i++) {
    if (cuisinesList.length + cuisines[i].length > 20)
      {
        break;
      }

    cuisinesList +=  "," + cuisines[i];
  }
  cuisinesList += "...";

  return (
    <div className="card">
      <div className="imgDiv">
      <img
        className="foodImage"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="img here"
      />
      </div>
      <h3>{name} </h3>
      <h4> * { avgRating } .{ sla.slaString } </h4>
      <h4> {cuisinesList}</h4>
    </div>
  );
};

export default RestaurantCard;





// import React from 'react';

// const RestaurantCard = ({ name, ...props }) => {
//   return (
//     <div className="restaurant-card">
//       <h3>{name}</h3>
//       {/* Render other properties as needed */}
//     </div>
//   );
// };

// export default RestaurantCard;






















// ======own swiggy-----

import { restrautlist } from "../config.js";

export const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img src={props.restaurant?.urlToImage} />
      <h2>{props.restaurant?.title.slice(0, 35)+"..."}</h2>
      <h5>{props.restaurant?.description}</h5>
      <h5>{props.restaurant?.publishedAt} Stars</h5>
    </div>
  );
};









// import { restrautlist } from "../config.js";

// export const RestrauntCard = (props) => {
//   return (
//     <div className="card">
//       <img src={props.restaurant?.urlToImage} />
//       <h2>{props.restaurant?.title}</h2>
//       <h5>{props.restaurant?.description}</h5>
//       <h5>{props.restaurant?.publishedAt} Stars</h5>
//     </div>
//   );
// };

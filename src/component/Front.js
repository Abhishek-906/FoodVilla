import React, { useState , useEffect } from "react"; // front =  body in video
import { restrautlist } from "../config.js";
import { RestrauntCard } from "./RestaurantCard.js";
// import ShimmerUI from "./ShimmerUI.js";
import Block from './Block';
import LocalImage from './assests/img/download.jpeg';


// function filterdata( searchText ,restaurants){
function filterdata( searchText ,allRestaurants){
  // const origin = restaurants ; 
  const filterdata = allRestaurants.filter((restaurant)=>restaurant?.title?.toLowerCase()?.includes(searchText?.toLowerCase()));
  // const filterdata = restaurants.filter((restaurant)=>restaurant.title.includes(searchText));
  // restaurants = origin;
 return filterdata;
   }  

const Front = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [Filteredrestaurants , setFilteredrestaurants] =useState([]);
    const [searchText, setsearchText] = useState("");
   
    useEffect(()=>{
      getRestaurants()
        },[searchText]);


       
    async function getRestaurants(e){
      const  data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=64c5dc514892418fb6824b2e192cc749");
      // const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json() ;
     
      setAllRestaurants(json.articles);
      setFilteredrestaurants(json.articles);
    }



    if(!allRestaurants)return null ;

    // if(Filteredrestaurants?.length==0){
    //  return (
    //   <>
    //         <input
    //       type="text"
    //       placeholder="Search"
    //       value={searchText}
    //       onChange={(e) => {
    //         setsearchText(e.target.value);

          

    //       }}/>


        {/* <button onClick={()=>{  
         const data = filterdata(searchText ,allRestaurants);
         setFilteredrestaurants(data);
          }
        }>Search</button> 
       <h1>No Result </h1> */}
    //   </>
    //  )
    //  }


    return (allRestaurants.length==0)?<Block/>:  (
    <>






       <div>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);

          

          }}/>

        <button onClick={()=>{  
         const data = filterdata(searchText ,allRestaurants);
         setFilteredrestaurants(data);
          }
        }>Search</button>
      </div>  
   
        <div className="restaurant-list">


        
         {/* {Filteredrestaurants.map((rest) => {
          return  (Filteredrestaurants?.length==0? return <Block/>:
          <RestrauntCard restaurant={rest} key={rest.source.name}/>
          )
        })}    */}


         {Filteredrestaurants.map((rest) => {
          return (
          <RestrauntCard restaurant={rest} key={rest.source.name}/>
          )
        })}     
      </div>
      <img src={LocalImage}></img>
    </>
  );
};
export default Front;

 








// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>till 8<<<<<<<<<<<<<<<<<<<<<<<<<<<



// import React, { useState , useEffect } from "react"; // front =  body in video
// import { restrautlist } from "../config.js";
// import { RestrauntCard } from "./RestaurantCard.js";
// import ShimmerUI from "./ShimmerUI.js";
// import Block from './Block';


// // function filterdata( searchText ,restaurants){
// function filterdata( searchText ,allRestaurants){
//   // const origin = restaurants ; 
//   const filterdata = allRestaurants.filter((restaurant)=>restaurant?.title?.toLowerCase()?.includes(searchText?.toLowerCase()));
//   // const filterdata = restaurants.filter((restaurant)=>restaurant.title.includes(searchText));
//   // restaurants = origin;
//  return filterdata;
//    }  

// const Front = () => {
//     const [allRestaurants, setAllRestaurants] = useState([]);
//     const [Filteredrestaurants , setFilteredrestaurants] =useState([]);
//     const [searchText, setsearchText] = useState("");
   
//     useEffect(()=>{
//       getRestaurants()
//         },[searchText]);


       
//     async function getRestaurants(e){
//       const  data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=64c5dc514892418fb6824b2e192cc749");
//       // const  data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
//       const json = await data.json() ;
     
//       setAllRestaurants(json.articles);
//       setFilteredrestaurants(json.articles);
//     }



//     if(!allRestaurants)return null ;

//     // if(Filteredrestaurants?.length==0){
//     //  return (
//     //   <>
//     //         <input
//     //       type="text"
//     //       placeholder="Search"
//     //       value={searchText}
//     //       onChange={(e) => {
//     //         setsearchText(e.target.value);

          

//     //       }}/>


//         {/* <button onClick={()=>{  
//          const data = filterdata(searchText ,allRestaurants);
//          setFilteredrestaurants(data);
//           }
//         }>Search</button> 
//        <h1>No Result </h1> */}
//     //   </>
//     //  )
//     //  }


//     return (allRestaurants.length==0)?<Block/>:  (
//     <>
//        <div>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setsearchText(e.target.value);

          

//           }}/>

//         <button onClick={()=>{  
//          const data = filterdata(searchText ,allRestaurants);
//          setFilteredrestaurants(data);
//           }
//         }>Search</button>
//       </div>  
   
//         <div className="restaurant-list">


        
//          {/* {Filteredrestaurants.map((rest) => {
//           return  (Filteredrestaurants?.length==0? return <Block/>:
//           <RestrauntCard restaurant={rest} key={rest.source.name}/>
//           )
//         })}    */}


//          {Filteredrestaurants.map((rest) => {
//           return (
//           <RestrauntCard restaurant={rest} key={rest.source.name}/>
//           )
//         })}     
//       </div>
//     </>
//   );
// };
// export default Front;

 




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Till 8th end<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

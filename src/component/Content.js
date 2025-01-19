import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';

const Content = () => {
  const [listItems, setListItems] = useState(null);
  const [search, setSearch] = useState("");
  const [dummyData, setDummyData] = useState(null);

  useEffect(() => {
    if (!listItems) handleFetch();
    else setDummyData(listItems);
  }, [listItems]);

  useEffect(() => {
    if (listItems) {
      if (search !== "") {
        const filteredList = listItems.filter((item) =>
          item.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setDummyData(filteredList);
      } else {
        setDummyData(listItems);
      }
    }
  }, [search, listItems]);

  const handleFetch = async () => {
    try {
      const req = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await req.json();
      const obj = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListItems(obj);
    } catch (error) {
      console.error('Error fetching the data:', error);
    }
  };

  return (
    <>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(e) => e.preventDefault()}>
          Search
        </button>
      </div>
      {dummyData == null && <Shimmer />}
      <div className="content">
        {dummyData != null &&
          dummyData.map((item) => (
            <Link to={item.cta.link} key={item.info.id}>
              <RestaurantCard {...item.info} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Content;

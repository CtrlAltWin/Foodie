import { menu_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu_URL } from "../utils/constants";
import resList from "../utils/mockData";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(null);
  const [Searched, setSearched] = useState("");
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1196607&lng=85.390982&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    // setTimeout(() => {
    //   setRestaurantList(resList)
    // }, 1000)
    fetchData();
  }, []);
  if (RestaurantList == null) return <Shimmer />;
  return (
    <div className="mx-28">
      <div className="flex items-center justify-between mx-3 my-8">
        <div className="filter">
          <button
            className="top rated h-10 w-32 px-4 py-2 bg-gray-50 rounded-md shadow-md mr-4"
            onClick={() => {
              const filtered = RestaurantList.filter(
                (res) => res.info.avgRating >= 4
              );
              setRestaurantList(filtered);
            }}
          >
            Top Rated
          </button>
          <button
            className="top rated h-10 w-32 px-4 py-2 bg-gray-50 rounded-md shadow-md mx-4"
            onClick={() => {
              const filtered = RestaurantList.filter(
                (res) => res.info.avgRating >= 4
              );
              setRestaurantList(filtered);
            }}
          >
            Fast Delivery
          </button>
          <button
            className="top rated h-10 w-32 px-4 py-2 bg-gray-50 rounded-md shadow-md mx-4"
            onClick={() => {
              const filtered = RestaurantList.filter(
                (res) => res.info.avgRating >= 4
              );
              setRestaurantList(filtered);
            }}
          >
            Pure Veg
          </button>
        </div>
        <div>
          <input
            type="search"
            className="h-10 w-[350px] pl-4  border border-solid border-gray-100 rounded-md shadow-md bg-gray-50 outline-none mx-2"
            placeholder="Search for restaurant"
            value={Searched}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          ></input>
          <button
            className="h-10 px-4 py-2 bg-gray-50 rounded-md shadow-md"
            onClick={() => {
              const filter = RestaurantList.filter((res) => {
                const resName = res.info.name;
                return resName.toLowerCase().includes(Searched.toLowerCase());
              });
              setRestaurantList(filter);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between">
        {RestaurantList.map((res) => {
          return (
            <Link to={"/:" + res.info.id} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

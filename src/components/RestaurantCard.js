import {CDN_URL} from "../utils/constants"

const RestaurantCard = (prop) => {
  const { resData } = prop;
  return (
    <div className="h-[290px] w-[240px] border-4 border-transparent bg-gray-50 shadow-md p-1 rounded-md">
      <img className="h-[180px] w-[240px] object-cover rounded-md mb-2"
        alt="Restaurant image"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="flex items-center justify-between">
        <h3 className="w-[150px] ml-1 p-1 font-sans font-medium truncate">{resData.info.name}</h3>
        <div className="w-[30px] h-[24px] mr-2 bg-green-400 rounded-md">
          <div className="items-center ml-1 text-white"><h3></h3>{parseFloat(resData.info.avgRating).toFixed(1)}</div>
        </div>
      </div>
      <h5 className="ml-1.5 w-[200px] font-thin truncate">{resData.info.cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;

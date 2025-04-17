import { useState, useEffect, useContext} from "react";
import RestaurantCard,{withPromotedLabel}from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
 
const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestauraunt] = useState([]);

  const [searchText, setSearchtText] = useState("");
  const RestaurantCardsPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered", listOfRestaurants);

  // * Normal JS variable
  // const listOfRestaurants = [
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334475',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '3.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334476',
  //       name: 'Dominos',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334477',
  //       name: 'McDonals',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.2',
  //     },
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  // ----mockdata----------------------------------------------
  // const fetchData = async () => {
  //   const mockData = [
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "121603",
  //         name: "Kannur Food Point",
  //         uuid: "51983905-e698-4e31-b0d7-e376eca56320",
  //         city: "1",
  //         area: "Tavarekere",
  //         totalRatingsString: "10000+ ratings",
  //         cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //         cuisines: ["Kerala", "Chinese"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //         deliveryTime: 24,
  //         minDeliveryTime: 24,
  //         maxDeliveryTime: 24,
  //         slaString: "24 MINS",
  //         lastMileTravel: 3,
  //         slugs: {
  //           restaurant: "kannur-food-point-btm",
  //           city: "bangalore",
  //         },
  //         avgRating: "3.9",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "229",
  //         name: "Meghana Foods",
  //         uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
  //         city: "1",
  //         area: "Koramangala",
  //         totalRatingsString: "10000+ ratings",
  //         cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //         cuisines: [
  //           "Biryani",
  //           "Andhra",
  //           "South Indian",
  //           "North Indian",
  //           "Chinese",
  //           "Seafood",
  //         ],
  //         tags: [],
  //         costForTwo: 50000,
  //         costForTwoString: "₹500 FOR TWO",
  //         deliveryTime: 16,
  //         minDeliveryTime: 16,
  //         maxDeliveryTime: 16,
  //         slaString: "16 MINS",
  //         lastMileTravel: 1.399999976158142,
  //         slugs: {
  //           restaurant: "meghana-foods-5th-block-koramangala",
  //           city: "bangalore",
  //         },

  //         avgRating: "4.4",
  //       },
  //     },
  //     {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "428",
  //         name: "Biryani Pot",
  //         uuid: "6db20a8b-dd85-4148-b750-107169f7f826",
  //         city: "1",
  //         area: "Btm Layout",
  //         totalRatingsString: "10000+ ratings",
  //         cloudinaryImageId: "mdipoyzfzsa7n7igskht",
  //         cuisines: ["North Indian", "Biryani"],
  //         tags: [],
  //         costForTwo: 50000,
  //         costForTwoString: "₹500 FOR TWO",
  //         deliveryTime: 19,
  //         minDeliveryTime: 19,
  //         maxDeliveryTime: 19,
  //         slaString: "19 MINS",
  //         lastMileTravel: 1.899999976158142,
  //         slugs: {
  //           restaurant: "biryani-pot-madiwala-junction-btm",
  //           city: "bangalore",
  //         },

  //         avgRating: "3.9",
  //       },
  //     },
  //   ];

  //   setListOfRestaurants(mockData);
  //   setFilteredRestauraunt(mockData);
  // };
  // ---------------------------------------------------------
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  //  whenever the state variables changes/update,react triggers a reconciliation cycle (react will re-renders the co mponent)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestauraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = UseOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like You're Offline!! Please Check Your Interner Connection;
      </h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);
  // conditional rendering

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (listOfRestaurants?.length || 0) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            data-testid = "serachInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestauraunt(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-xl"
            onClick={() => {
              // * Filter logic
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );

              setListOfRestaurants(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
          <label>UserName :  </label>
          <input 
          className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className=" flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted?<RestaurantCardsPromoted/>:<RestaurantCard resData={restaurant} /> }
            
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Body;

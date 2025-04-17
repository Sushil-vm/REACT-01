import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

  // console.log(resId);

  // useEffect(() => { 
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   // console.log(json);
  //   // console.log(resInfo);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, description, header } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
        c.card?.card?.["@type"] === 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories); 
    // console.log("ItemCards", itemCards);

  const offers =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category,index)=>(
       <RestaurantCategory 
       key={category?.card?.card?.title}
       data={category?.card?.card}
       showItems={index === showIndex ? true : false}
       setShowIndex={()=> setShowIndex(index)}
       />
          
      ))}
      
    </div>
  );
};

export default RestaurantMenu;






// <h4 className="text-xl font-semibold mt-6 mb-2 text-green-700">OFFERS</h4>
//       <ul className="space-y-2">
//         {offers.map((offer, index) => (
//           <li key={index}
//           className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm"
//           >
//             <strong className="font-medium flex  text-green-800">{offer.info.header}</strong> <p className="text-sm text-green-600">{offer.info.couponCode}-
//             {offer.info.description}</p>
//           </li>
//         ))}
//       </ul>
//       <h4 className="text-xl font-semibold mt-8 mb-2 text-gray-800">MENU</h4>
//       <ul className="menu-list">
//         {itemCards.map((item) => (
//           <li key={item.card.info.id} className="py-3">
//             {item.card.info.name}-{"Rs."}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props) =>{
    const {resData} = props;

    console.log(resData);
  
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla} = resData?.info;
  
  
    
      return(
          <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-amber-500  transition-all' > 
              <img 
               className="rounded-lg" 
                src={CDN_URL+cloudinaryImageId} 
                  alt="Restaurant Logo"
                /> 
                    
              <h3 className="font-bold py-4 text-xl font-serif">{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>⭐{avgRating}</h4>  
              <h4>{costForTwo}</h4>  
              <h4>{sla?.slaString}</h4>  
  
          </div>
      ); 
};
  

// Higher Order Component

// input - RestaurantCard => Output - RestaurantCardsPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
    <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
      <RestaurantCard {...props} />
    </div>
    );
  };
};


export default RestaurantCard
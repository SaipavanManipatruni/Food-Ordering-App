// import RestarantCard from "./RestarantCard.js";
// import { useState , useEffect } from "react";
// import resList from "../utils/mockData.js";



// const Body = () => {

//     const [listOfRestaurants,setListOfRestarunt]= useState(resList);
//     const[filteredRestaurant,setFilteredRestaurant]=useState([]);
//     const [searchText,setSearchText]=useState("");

// useEffect(()=>{
//     fetchData();
// },[])

// const fetchData = async () =>{
//     const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     const restaurants =
//          json?.data?.cards?.map((card) => card?.card?.card)
//          ?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)
//          ?.gridElements?.infoWithStyle?.restaurants;

//      console.log(restaurants);

// setListOfRestarunt(restaurants);
// setFilteredRestaurant(restaurants);};

//     return (
//         <div className="body">
       
//             <div className="filter">
//                <input  type="text" className="border border-solid border-black m-5" value={searchText} onChange={(e)=>{setSearchText(e.target.value) }} />
//                <button className="px-4 py-2 bg-green-200 m-5 rounded-lg hover:shadow" 
//                onClick={()=>{console.log(searchText)}}> Search</button>
              
//             </div>

//         <div className="filter">
//                        <button 
//                        className="filter-btn"
//                         onClick={()=>{
//                                const filteredList = listOfRestaurants.filter(
//                                  (res) => res.info.avgRating > 4);
//                setListOfRestarunt(filteredList);
//                     }}
//                         >
//                             Top Rated Restaurants
//                         </button>
//              </div>

             
//              <div className="flex flex-wrap ">
//                  {filteredRestaurant?.filter((res) => res?.info)
//                  .map((restaurant) => (<RestarantCard
//                  key={restaurant.info.id}resData={restaurant}
//       />
//   ))}
// </div>
//         </div>


//     );
// };
import RestarantCard from "./RestarantCard.js";
import { useState, useEffect } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestarunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {

            const data = await fetch(
                "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

            const restaurants =
                json?.data?.cards
                    ?.map((card) => card?.card?.card)
                    ?.find(
                        (card) =>
                            card?.gridElements?.infoWithStyle?.restaurants
                    )
                    ?.gridElements?.infoWithStyle?.restaurants || [];

            console.log(restaurants);

            setListOfRestarunt(restaurants);
            setFilteredRestaurant(restaurants);

        } catch (error) {

            console.log("Error fetching restaurants:", error);
        }
    };

    return (

        <div className="body">

            {/* Search + Filter Section */}
            <div className="flex items-center flex-wrap">

                {/* Search Input */}
                <input
                    type="text"
                    className="border border-solid border-black m-5 px-4 py-2 rounded-lg"
                    placeholder="Search Restaurants..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />

                {/* Search Button */}
                <button
                    className="px-4 py-2 bg-green-200 m-5 rounded-lg hover:bg-green-300"
                    onClick={() => {

                        const searchedRestaurant =
                            listOfRestaurants.filter((res) =>
                                res?.info?.name
                                    ?.toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );

                        setFilteredRestaurant(searchedRestaurant);
                    }}
                >
                    Search
                </button>

                {/* Top Rated Filter */}
                <button
                    className="px-4 py-2 bg-yellow-200 m-5 rounded-lg hover:bg-yellow-300"
                    onClick={() => {

                        const filteredList =
                            listOfRestaurants.filter(
                                (res) => res?.info?.avgRating > 4
                            );

                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>

                {/* Reset Button */}
                <button
                    className="px-4 py-2 bg-gray-200 m-5 rounded-lg hover:bg-gray-300"
                    onClick={() => {

                        setFilteredRestaurant(listOfRestaurants);
                        setSearchText("");
                    }}
                >
                    Reset
                </button>

            </div>

            {/* Restaurant Cards */}
            <div className="flex flex-wrap justify-center">

                {filteredRestaurant
                    ?.filter((res) => res?.info)
                    ?.map((restaurant) => (

                        <RestarantCard
                            key={restaurant?.info?.id}
                            resData={restaurant}
                        />
                    ))}

            </div>

        </div>
    );
};

export default Body;
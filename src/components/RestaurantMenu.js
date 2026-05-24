import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu = async () => {
    // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=14555&catalog_qa=undefined&submitAction=ENTER");
   const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json.data)
 
};

// if (resInfo === null) return <shimmer/>;
    return(
        <div className="Menu">
            <h1>Paradise</h1>
            <h3>Rating</h3>
            <ul>
                <li>Biriyani</li>
                <li>Chicken Fry</li>
                <li>Mutton</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;
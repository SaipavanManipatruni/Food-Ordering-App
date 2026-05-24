
import { CDN_URL } from "../utils/constants";

const RestarantCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo
    } = resData?.info || {};

    const { deliveryTime } = resData?.info?.sla || {};

    return(
        <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-2xl">

            <img
            className="rounded-lg  "
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
            />

            <h3 className="font-bold py-4 text-lg"> {name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            {console.log(cloudinaryImageId)}
            {console.log(resData)}

        </div>
    );
};

export default RestarantCard;
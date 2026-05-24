import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();

    return(
        <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png" />
            <h2>Something went Wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
};

export default Error;
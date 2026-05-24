import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{

    const [btn,setBtn] = useState("LogIn")
   
    return(
        <div className="flex  justify-between bg-orange-200">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 "><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/Contact">Contact Us</Link>  </li>
                    <li className="px-4">Cart</li>
                   
                    <button  onClick={()=>{
                        btn===("LogIn")? setBtn("LogOut"):setBtn("LogIn");
                    }}
                    >{btn}</button>
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;

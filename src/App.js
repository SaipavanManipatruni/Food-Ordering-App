
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
// import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";




const Applayout = ()=>{
   return( 
        <div>
            <Header/>
            <Outlet/>
        </div>
        );
}

const AppRouter = createHashRouter([
   { 
    path:"/",
    element:<Applayout/>,
    children:[
         {
        path: "/",
        element: <Body/>
       },
       { 
         path:"/About",
         element:<About/>,
       },
       {
        path: "/Contact",
        element: <Contact/>
       },
        {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
       },
   
   
 ],
    errorElement: <Error/>,
   },
  
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);
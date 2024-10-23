import React, { lazy } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurantmenu from "./components/Restaurantmenu";
import { Suspense } from "react";
// import Grocery from "./components/Grocery";


const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));


const AppLayout=()=>{
    return(
        <div>
            <Header/>
           <Outlet/>
        </div>
    )
}

// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>,
//         errorElement:<Error/>
//     },
//     {
//         path:"/about",
//         element:<About/>
//     }
// ])


const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
        {
          path:"/",
          element:<Body/>
        },
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
        },
        {
            path:"/restaurant/:resId",
            element:<Restaurantmenu/>
        }
    ],
    errorElement:<Error/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
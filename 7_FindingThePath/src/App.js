import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurantmenu from "./components/Restaurantmenu";






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
            element:<About/>,
        },
        {
            path:"/contact",
            element:<Contact/>
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
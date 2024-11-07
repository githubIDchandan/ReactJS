import React, { lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurantmenu from "./components/Restaurantmenu";
import { Suspense } from "react";
import usercontext from "./utils/UserContext";
import { useContext } from "react";
// import Grocery from "./components/Grocery";


const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));


const AppLayout=()=>{

   const [userName,setUserName]=useState();

   useEffect(()=>{
      const data={
        name:"chandan"
      }

      setUserName(data.name)

   },[])

    return(
        <div>
            <usercontext.Provider value={{loggedInUser:userName, setUserName}}>
           {/* <usercontext.Provider value={{loggedInUser:"elon musk"}}>
           <Header/>
           </usercontext.Provider> */}
           <Header/>
           <Outlet/>
           </usercontext.Provider>
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
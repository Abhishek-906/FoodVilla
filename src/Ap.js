
// --------------------Project swiggy--

import React from "react";
import ReactDOM from 'react-dom/client'
import ErrorPage from "./component/ErrorPage.js"
import About from "./component/About"
import Navbar from './component/Navbar';
import Home from './component/Home.js';
import Footer from './component/Footer';
import RestaurantMenu from "./component/RestaurantMenu.js"
import SignUpForm from './component/SignUpForm'
import '../swggy.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Body from "./component/staticdata.js";
import Content from "./component/Content.js";
import Main from "./component/Main.js";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        // element:<Home/>
        element:<Main/>
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/st',
        element: <Body/>
      },
      {
        path:'/signUp',
        element: <SignUpForm  />
      },
      {
        path:'/Cart',
        element: <Content />
      }

      // {
      //   path:'/restaurants/:id',
      //   element: <RestaurantMenu  />,

      // }
    ]
  }
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <RouterProvider router={appRouter} /> 
)


// --------------------Project swiggy--

// import React from "react";
// import ReactDOM from 'react-dom/client'
// import ErrorPage from "./component/ErrorPage.js"
// import About from "./component/About"
// import Navbar from './component/Navbar';
// import Home from './component/Home.js';
// import Footer from './component/Footer';
// import RestaurantMenu from "./component/RestaurantMenu.js"
// import SignUpForm from './component/SignUpForm'
// import '../swggy.css'
// import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
// import Body from "./component/staticdata.js";
// import Content from "./component/Content.js";
// const AppLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
    
//     </>
//   )
// }

// const appRouter = createBrowserRouter([
//   {
//     path:'/',
//     element: <AppLayout />,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:'/about',
//         element: <About />
//       },
//       {
//         path:'/st',
//         element: <Body/>
//       },
//       {
//         path:'/signUp',
//         element: <SignUpForm  />
//       },
//       {
//         path:'/Cart',
//         element: <Content />
//       }

      // {
      //   path:'/restaurants/:id',
      //   element: <RestaurantMenu  />,

      // }
//     ]
//   }
  
// ])



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//    <RouterProvider router={appRouter} /> 
// )




































































// ----------------own swiggy--

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Navbar from "./component/Navbar";
// import Front from "./component/Front";
// import Footer from "./component/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
// import AboutUS from "./component/AboutUS";
// import Error from "./component/Error";
// import Contact from "./component/ContactUs";
// import Block from "./component/Block";



// const AppLayout = () => {
//   return (
//     <>
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element : <AppLayout/>,
//     errorElement:<Error/>,
//     children:[
//       {
//         path:"/",
//         element:<Front/>
//       },
//       {
//         path:"/Aboutus",
//         element:<AboutUS/>
//       },
//       {
//         path:"/Contactus",
//         element:<Contact/>
//       }
//     ]
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />)



























// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Till 8th<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Navbar from "./component/Navbar";
// import Front from "./component/Front";
// import Footer from "./component/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

// const rt = ReactDOM.createRoot(document.getElementById("root"));

// const Two = () => {
//   return (
//     <>
//       <Navbar/>
//       <Front/>
//       <Footer/>
//     </>
//   );
// };

// rt.render(<Two/>);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Till 8th end<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


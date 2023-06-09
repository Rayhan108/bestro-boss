import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes"

import Dashboard from "../../layout/Dashboard";
import MyCart from "../../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../../Pages/DashBoard/AddItem/AddItem";
import AdminRoutes from "../PrivetRoutes/AdminRoutes";
import ManageItem from "../../Pages/DashBoard/ManageItem/ManageItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: <PrivetRoutes></PrivetRoutes>,
      },
  
    ],
    
  },
{  path:"dashboard",
  element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
  children:[
    {
      path:'myCart',
      element:<MyCart></MyCart>
    },
    {
      path:'allUsers',
      element:<AllUsers></AllUsers>
    },
    {
      path:'addItem',
      element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
    },
    {
      path:'manageItem',
      element:<AdminRoutes><ManageItem></ManageItem></AdminRoutes>
    }
  ]
}
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Secret from "../../Pages/Shared/Secret/Secret";
import Dashboard from "../../layout/Dashboard";
import MyCart from "../../Pages/DashBoard/MyCart/MyCart";

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
        element: <PrivetRoutes><Secret></Secret></PrivetRoutes>,
      },
  
    ],
    
  },
{  path:"dashboard",
  element:<Dashboard></Dashboard>,
  children:[
    {
      path:'myCart',
      element:<MyCart></MyCart>
    }
  ]
}
]);

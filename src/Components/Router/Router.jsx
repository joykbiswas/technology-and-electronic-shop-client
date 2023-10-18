import { createBrowserRouter,  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addProduct',
            element:<AddProduct></AddProduct>
        }
      ]
    },
  ]);



export default router;
import { createBrowserRouter,  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import Phones from "../phones/phones";
import BrandName from "../BrandName/BrandName";
import PhonesCard from "../PhonesCard/PhonesCard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch('http://localhost:5000/phone')
            
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
        },
        {
          path:'/phones',
          element:<Phones></Phones>,
          // loader:()=> fetch('http://localhost:5000/phone')
        },
        {
          path:"/",
          element:<PhonesCard></PhonesCard>

        },
        {
          path:'/brandName',
          element:<BrandName></BrandName>,
          loader:()=>fetch('/brand.json')
        }
      ]
    },
  ]);



export default router;
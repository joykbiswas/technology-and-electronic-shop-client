import { createBrowserRouter,  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddProduct from "../AddProduct/AddProduct";
import BrandName from "../BrandName/BrandName";
import ProductsCard from "../ProductsCard/ProductsCard";
import BrandProducts from "../BrandProducts/BrandProducts";
import ProductsPage from "../ProductsPage/Productspage";
import MyCart from "../MyCart/MyCart";
import AboutUs from "../AboutUs/AboutUs";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:() => fetch('https://technology-and-electronic-shop-server-eqm5nhs7e.vercel.app/phone')
            
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
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        
        {
          path:"/productscard",
          element:<ProductsCard></ProductsCard>

        },
        {
          path:'/brandName',
          element:<BrandName></BrandName>,
          loader:()=>fetch('/brand.json')
        },
        {
          path:'/brand-product/:brandname',
          element:<PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>,
          loader:({params})=>fetch(`https://technology-and-electronic-shop-server-eqm5nhs7e.vercel.app/phone/${params.brandname}`)
        },
        {
          path:"/product/:_id",
          element:<ProductsPage></ProductsPage>,
          loader:()=>fetch('https://technology-and-electronic-shop-server-eqm5nhs7e.vercel.app/phone')
          
        },
        {
          
          path:'/brand-product/:brand/update-product/:id',
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params}) =>fetch(`https://technology-and-electronic-shop-server-eqm5nhs7e.vercel.app/phone/brandname/${params.id}`)
        },
        {
          path:'/my-cart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'/about_us',
          element:<AboutUs></AboutUs>
        }
      ]
    },
  ]);



export default router;
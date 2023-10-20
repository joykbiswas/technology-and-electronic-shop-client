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
          loader:({params})=>fetch(`http://localhost:5000/phone/${params.brandname}`)
        },
        {
          path:"/product/:_id",
          element:<ProductsPage></ProductsPage>,
          loader:()=>fetch('http://localhost:5000/phone')
          
        },
        {
          // path:'/update-Product/:id',
          path:'/brand-product/:brand/update-product/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader:({params}) =>fetch(`http://localhost:5000/phone/brandname/${params.id}`)
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
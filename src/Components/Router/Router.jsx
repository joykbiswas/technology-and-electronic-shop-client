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
        // {
        //   path:'/phones',
        //   element:<Phones></Phones>,
        //   // loader:()=> fetch('http://localhost:5000/phone')
        // },
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
          element:<BrandProducts></BrandProducts>,
          loader:({params})=>fetch(`http://localhost:5000/phone/${params.brandname}`)
        },
        {
          path:"/product/:_id",
          element:<ProductsPage></ProductsPage>,
          loader:()=>fetch('http://localhost:5000/phone')
          // loader:({params})=>fetch(`http://localhost:5000/phone/${params._id}`)
        },
        {
          path:'/my-cart',
          element:<MyCart></MyCart>
        }
      ]
    },
  ]);



export default router;
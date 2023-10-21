
import {  useState } from "react";
import HomeBanner from "../Banner/HomeBanner";
import BrandName from "../BrandName/BrandName";
// import Phones from "../phones/phones";
import { Form, useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import Deals from "./Deals";
import From from "./Form";
import HomeGetOffer from "./HomeGetOffer";
import SpecialProduct from "./SpecialProduct";


const Home = () => {
    const phoneLoader =useLoaderData()
    console.log(phoneLoader);
    const [selectProducts, setSelectProducts] = useState(null)
   
    const filterProduct = selectProducts ? 
                            phoneLoader.filter((phones) =>phones.brandName === selectProducts)
                            : phoneLoader;
    return (
        <div className="">
            
            
            <HomeBanner></HomeBanner>
            <BrandName setSelectProducts={setSelectProducts}></BrandName>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
           </div>
            
            <Deals></Deals>
           <HomeGetOffer></HomeGetOffer>
           <SpecialProduct></SpecialProduct>
            <From></From>
        </div>
    );
};

export default Home;

 
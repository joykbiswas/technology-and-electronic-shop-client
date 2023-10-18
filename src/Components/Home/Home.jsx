
import {  useState } from "react";
import HomeBanner from "../Banner/HomeBanner";
import BrandName from "../BrandName/BrandName";
// import Phones from "../phones/phones";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const Home = () => {
    const phoneLoader =useLoaderData()
    console.log(phoneLoader);
    const [selectProducts, setSelectProducts] = useState(null)
   
    const filterProduct = selectProducts ? 
                            phoneLoader.filter((phones) =>phones.brandName === selectProducts)
                            : phoneLoader;
    return (
        <div>
            
            
            <HomeBanner></HomeBanner>
            <BrandName setSelectProducts={setSelectProducts}></BrandName>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {/* {
            filterProduct.map(aProduct =>(<ProductsCard key={aProduct._id}
            phones={aProduct}
            ></ProductsCard>))
           } */}
           </div>
            {/* <Phones></Phones> */}
        </div>
    );
};

export default Home;

 /*

 echo "# b8a10-brandshop-client-side-joykbiswas" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-joykbiswas.git
git push -u origin main
 */
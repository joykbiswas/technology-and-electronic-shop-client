import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";
import BrandProductsBanner from "./BrandProductsBanner";

const BrandProducts = () => {
    const data =useLoaderData()

    return (
        <div>
            <div className="h-[60vh] md:h-[90vh] my-9">
            <BrandProductsBanner></BrandProductsBanner>
            </div>
         
         
         
         
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(product=><ProductsCard key={product._id}
                         products={product} id={product}
                         ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;
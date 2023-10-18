import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const BrandProducts = () => {
    const data =useLoaderData()

    return (
        <div>
            <div className="h-[70vh] border border-red-400">
            <h3 className="text-3xl ">BrandProducts components</h3>
            </div>
            <div className="grid grid-cols-3 gap-5">
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
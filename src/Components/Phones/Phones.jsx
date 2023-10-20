
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

 
const Phones = () => {
    const phoneLoader = useLoaderData()
    console.log(phoneLoader);

    
    
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {
                phoneLoader.map(phones=><ProductsCard 
                key={phones._id}
                phones={phones} 
                ></ProductsCard>)
            }
            </div>
        </div>
    );
};

export default Phones;


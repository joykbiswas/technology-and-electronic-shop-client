
import { useLoaderData } from "react-router-dom";
import PhonesCard from "../PhonesCard/PhonesCard";

 
const Phones = () => {
    const phoneLoader = useLoaderData()
    console.log(phoneLoader);

    
    
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {
                phoneLoader.map(phones=><PhonesCard 
                key={phones._id}
                phones={phones} 
                ></PhonesCard>)
            }
            </div>
        </div>
    );
};

export default Phones;
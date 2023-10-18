
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

/*
আপনি প্রতিটা product এ brand_name রাখবেন.. আর সবগুলা brand_name একটা collection এ রাখবেন... 

প্রথমে সবগুলি brand_name fetch করবেন db থেকে... তারপর সেগুলার নাম use করে React Route বানাবেন..  brand এর নাম useParams দিয়ে নিয়ে ঐ brand এর নাম db এ সার্চ করে product আনবেন

যতটা সম্ভব database use করেন... MongoDB এর website বা Mongo Compass এ গিয়ে Add Document করে brand এর নামের collection তৈরি করতে পারেন, তাহলে json দরকার হবে না


{ brandname : req.params.brandname }
*/
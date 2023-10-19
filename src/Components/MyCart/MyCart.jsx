import { useEffect, useState } from "react";
import MyCarts from "../MyCarts/MyCarts";

const MyCart = () => {
   
    const [products, setProducts] = useState([])
    const  [noFound, setNoFound] = useState(false);
    
    useEffect(() =>{
        const productItems = JSON.parse(localStorage.getItem('products'))
        if(productItems){
            setProducts(productItems)
        }
        else{
            setNoFound('No Product Found')
        }
    },[])
    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center text-2xl">{noFound}</p>
                    : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 gap-8"> 
                        {
                            products.map(product =><MyCarts key={product._id} product={product}></MyCarts>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyCart;
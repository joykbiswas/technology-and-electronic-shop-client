// import ProductsCard from '../ProductsCard/ProductsCard';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductsDetails from "../ProductsDetails/ProductsDetails";

const ProductsPage = () => {
    const [product, setProduct] = useState({});

    const{_id} = useParams();
    console.log(_id);

    const products = useLoaderData();
    console.log(products);
     
    useEffect(() =>{
        const findProduct = products.find((card) =>card._id === _id)
        setProduct(findProduct)
        console.log(findProduct);
    },[_id,products])
    return (
        <div>
            <ProductsDetails product={product}></ProductsDetails>
        </div>
    );
};

export default ProductsPage;
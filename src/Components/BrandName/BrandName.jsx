import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const BrandName = ({setSelectProducts}) => {
    const [brands, setBrands] =useState([])
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data)
      });
  },[]);

  const handleSelected=(brandName) =>{
      setSelectProducts(brandName);
  } 

  return (
    <div>
         <h2 className="text-5xl font-bold py-8  ">Our category</h2>
         <hr  className="w-20 border-4 "/>
        <div className="flex flex-wrap justify-center my-7" 
        data-aos="fade-up"
        data-aos-duration="2000"
        >
        {
            brands.map(logo=>(<Link to={`/brand-product/${logo.brandName}`} key={logo.id}>< div className="w-44 border m-2"
             >
                <img className="border h-32  "
                src={logo.img} alt="" />
                <button onClick={() =>handleSelected(logo.brandName)}
                className="p-4 w-full bg-red-400 text-white  " >SHOW PRODUCT</button>
                  </ div> </Link>))
        }
        <div>

        </div>
        </div>
      
    </div>
  );
};

BrandName.propTypes ={
  setSelectProducts:PropTypes.object
}
export default BrandName;

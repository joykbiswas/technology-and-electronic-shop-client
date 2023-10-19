import PropTypes from 'prop-types';

const ProductsDetails = ({product}) => {
    
    const {_id,image, brandName, name, price, rating, type,description} = product;
   
    const handleShowProducts =() =>{
        const addedProduct =[];
        const productItems = JSON.parse(localStorage.getItem('products'))
        if(!productItems){
            addedProduct.push(product)
            localStorage.setItem('products',JSON.stringify(addedProduct))
            alert('you select products successfully')
         // swal("Good job!", "Your Products selected", "success");

        }
        else{
            const isExists = productItems.find(product =>product._id === _id)
            if(!isExists){
                addedProduct.push(...productItems,product)
                localStorage.setItem('products',JSON.stringify(addedProduct))
                // swal("Good job!", "Your Products selected!", "success");
                alert('you select products successfully')
            }
            else{
                alert("You have already donation!")
                // swal("Good job!", "You have already donation!", "error");
            }
        }
    }
    return (
        <div >
      
        <div className="card max-w-4xl mx-auto p-5 m-4 bg-base-200 shadow-xl">
          <figure>
            <img className='h-64 pt-3'
              src={image}
              alt="product"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">name: {name}</h2>
            
            <h2 className="card-title">brandName: {brandName}</h2>
            <h2 className="card-title">type: {type}</h2>
    
            <h2 className="card-title">price: ${price}</h2>
            <h2 className="card-title">rating: {rating}</h2>
            
            <p className='text-2xl'>{description}</p>
            <div className="card-actions justify-end">
             
             <button onClick={handleShowProducts}
               className="btn btn-primary w-full">Add to cart</button>
             
            </div>
          </div>
        </div>
      </div>
    );
};
ProductsDetails.propTypes={
    product:PropTypes.array
}

export default ProductsDetails;
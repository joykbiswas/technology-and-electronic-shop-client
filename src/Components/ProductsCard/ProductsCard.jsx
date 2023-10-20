import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const ProductsCard = ({ products }) => {
    const {_id,image, brandName, name, price, rating, type} = products;

    
  return (
    <div>
      
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className='h-64 pt-3'
            src={image}
            alt="product"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">name: {name}</h2>
          <div className='flex justify-between'>
          <h2 className="card-title">brandName: {brandName}</h2>
          <h2 className="card-title">type: {type}</h2>
          </div>
          <div className='flex justify-between' >
          <h2 className="card-title">price: ${price}</h2>
          <h2 className="card-title">rating: {rating}</h2>
          </div>
          <p></p>
          <div className="card-actions justify-end">
           <Link to={`/product/${_id}`}> 
           <button  className="btn btn-primary">details</button>
           </Link>
            <Link to={`/brand-product/:brand/update-product/${_id}`}>
            <button className="btn btn-primary">update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
ProductsCard.propTypes ={
  products:PropTypes.object
}

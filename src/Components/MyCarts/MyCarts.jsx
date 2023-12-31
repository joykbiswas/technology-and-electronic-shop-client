import PropTypes from 'prop-types';



const MyCarts = ({product,onDelete}) => {
    const {_id,image, brandName, name, price, rating, type} = product;

    const handleDelete =()=>{
      onDelete(_id)
    }
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
          
            <button onClick={handleDelete}
             className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
        </div>
    );
};
MyCarts.propTypes={
    product:PropTypes.array,
    onDelete:PropTypes.array
  }

export default MyCarts;
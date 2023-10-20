import Swal from 'sweetalert2'

import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData(); 
    const {_id,image, brandName, name, price, rating, type,description} = product;

    const handleUpdateProduct = e=>{
        e.preventDefault()
        const form =e.target;

        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        // console.log(image,name,brandName,type,price,description,rating);

        const updateProduct ={image,name,brandName,type,price,description,rating}
        console.log(updateProduct);

        fetch(`https://technology-and-electronic-shop-server-eqm5nhs7e.vercel.app/phone/brandname/${_id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(updateProduct)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                
                Swal.fire({
                    title: 'success!',
                    text: 'products updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
        
    }
    console.log(product);
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-2/3">
          
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProduct}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="product name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  defaultValue={brandName}
                  placeholder="Brand name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={type}
                  placeholder="product type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="product Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder=" rating "
                  className="input input-bordered"
                  required
                />
               
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateProduct;
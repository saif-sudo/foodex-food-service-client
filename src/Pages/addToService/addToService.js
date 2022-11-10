import React from 'react';

const AddToService = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
              
              <div >
       <div className="text-center">
       <h1 className="text-5xl font-bold">Add to Service</h1><br/>
         
       </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Title:</span>
                </label>
                <input type="text" name="title" placeholder="Title" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image:</span>
                </label>
                <input name="file" type="file" className="file-input w-full " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price:</span>
                </label>
                <input type="text" placeholder="Price" name='price' className="input input-bordered" required/>
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description:</span>
                </label>
                
                <textarea placeholder="desc" name='desc' className="textarea input input-bordered"></textarea>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Add to Service" type="submit"/>
                
              </div>
            </form>
            
          </div>
          </div >
        </div>
    );
};

export default AddToService;
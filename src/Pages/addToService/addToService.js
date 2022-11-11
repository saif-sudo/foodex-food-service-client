import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AddToService = () => {
    //const [service ,setService] = useState({});
    //const [_id] = useLoaderData();
   //const {addservice} = useContext(AuthContext);
    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.desc.value;
        const price = form.price.value;
        const image = form.image.value;
       
       

        const addservice = {
          
            title,
            details,
            price,
            image
           
            

        }
        fetch('http://localhost:5000/services' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addservice)
        })

        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
              alert('Service added successfully');
              form.reset();
             
          }
      })
        .error(er => console.error(er))

    }

    
        
       /* console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        });
    }*/
    return (
        <div>
              
              <div >
       <div className="text-center">
       <h1 className="text-5xl font-bold">Add to Service</h1><br/>
         
       </div>

            <div >
            <form  onSubmit={handleAddServices} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Title:</span>
                </label>
                <input type="text" name="title" placeholder="Title" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url:</span>
                </label>
                <input type="text" placeholder="image" name='image' className="input input-bordered" required/>
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
                
                <textarea placeholder="desc" name='desc' className="textarea textarea-bordered h-50 w-full"></textarea>
               
              </div>
              <div className="form-control mt-6">
              <label htmlFor="my-modal-4" className='text-center'>    <input className="btn btn-primary" value="Add to Service" type="submit"/></label>
                
              </div>
              {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" htmlFor="">
    <h3 className="text-lg text-success font-bold">Your Service Added Successfully</h3>
    
  </label>
</label>
            </form>
            
          </div>
          </div >
        </div>
        
    );
}


export default AddToService;
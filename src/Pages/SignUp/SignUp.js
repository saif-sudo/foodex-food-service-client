import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const SignUp = () => {

  const {createUser} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
           
        <div >
       
          <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up</h1><br/>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email'  className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" required/>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Sign Up" type="submit"/>
                
              </div>
            </form>
            <p className='p-5'>Already have an Account ? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
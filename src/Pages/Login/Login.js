import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        
        <div className="hero min-h-screen bg-base-200">
           
        <div >
       
          <div className="text-center">
          <h1 className="text-5xl font-bold">Login</h1><br/>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name= "password" type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="/forgetpassword" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Login" type="submit"/>
                
              </div>
            </form>
            <p className='p-5'>If you don't have an account ? <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;
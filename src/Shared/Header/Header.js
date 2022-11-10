import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/Image/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Header = () => {
  const {user , logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        {
           user?.email ?
           <>
               
               <li><Link to='/services' className='font-semibold'>Services</Link></li>

               <li className='font-semibold'>
                 <button onClick={handleLogOut} className='btn-ghost'>SignOut</button>
               </li>
           </>
           :
           <li><Link to='/login' className='font-semibold'>Login</Link></li>
        }
        
    </>
    return (
        <div className="navbar bg-base-100 h-20 mb-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link  to="/" className="btn btn-ghost normal-case text-xl">

        <img width="150" height="150" src={logo} alt=""/><br/>
        <h1>Foodex</h1>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-success">Login</button>
  </div>
</div>
    );
};

export default Header;
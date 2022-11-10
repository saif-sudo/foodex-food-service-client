import Main from "../../Layout/Main";
import AddToService from "../../Pages/AddToService/AddToService";

import Home from "../../Pages/Home/Home";
import ServiceAll from "../../Pages/Home/Services/ServiceAll";
import ServiceFullDetails from "../../Pages/Home/Services/ServiceFullDetails";

import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children:[{
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/services',
    element: <ServiceAll></ServiceAll>,
   
      /*  children:[
            {
                path: '/services',
            element: <Services></Services>,
           // loader: () => fetch(`https://learn-tech-server-theta.vercel.app/courses/cat/`),
            
                },
          
              
                   
        ]*/
    },
    {
      path: '/services/:id',
  element: <ServiceFullDetails></ServiceFullDetails>,
  loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
      },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:'/addtoservice',
      element:<AddToService></AddToService>
    }
      
    
    
    ]
    }
  ]);
  export default router;
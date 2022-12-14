import Main from "../../Layout/Main";
import AddToService from "../../Pages/AddToService/AddToService";
import Blog from "../../Pages/Blog/Blog";

import Home from "../../Pages/Home/Home";
import ServiceAll from "../../Pages/Home/Services/ServiceAll";
import ServiceFullDetails from "../../Pages/Home/Services/ServiceFullDetails";

import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
  loader: ({params}) => fetch(`https://foodex-cloud-kitchen-server.vercel.app/services/${params.id}`),
      },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/addtoservice',
      element:<AddToService></AddToService>
    },
    {
      path:'/reviews',
      element:<Reviews></Reviews>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
      
    
    
    ]
    }
  ]);
  export default router;
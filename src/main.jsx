import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import AuthProvider from './Providers/AuthProvider';
import Root from './layout/Root';
import AddPlace from './Components/AddPlace';
import AllPlace from './Components/AllPlace';
import MyList from './Components/MyList';
import UpdatePlace from './Components/UpdatePlace';
import SportSection from './Components/SportSection';
import Details from './Components/Details';
import PrivateRoute from './route/PrivateRoute';

const router = createBrowserRouter([
  {
    //loader: () => fetch('http://localhost:5000/travel')
    path: "/",
    element: <Root></Root>,
  
    
   // errorElement:<PageError></PageError>,
    children: [
   
      {
        path: "/home",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,

      },
      {
        path: '/register',
        element:<Register></Register>,
      }
      ,
      {
        path: '/add',
        element:<PrivateRoute> <AddPlace></AddPlace></PrivateRoute> ,
      }
      ,
      {
        path: '/allplaces',
        element:<AllPlace></AllPlace>,
        loader: () => fetch('http://localhost:5000/travel')
      }
      ,
      {
        path: '/mylist',
        element:<MyList></MyList>,
        loader: () => fetch('http://localhost:5000/travel')
      }
      ,
      {
        path: '/update/:id',
        element:<PrivateRoute> <UpdatePlace></UpdatePlace></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:5000/travel/${params.id}`)

      }
      ,
      {
        path: '/sport',
        element:<SportSection></SportSection>,
       
      }
      ,
      {
        path: '/detail/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/travel/${params.id}`)

      }
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>



   
  </React.StrictMode>,
)

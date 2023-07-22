import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <HelmetProvider>
    <Toaster></Toaster>
   <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
   
   </AuthProvider>
  </React.StrictMode>,
)

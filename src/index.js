import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import Price from './components/pricing'
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Student from "./components/Student";
import Employee from "./components/employeetable";
import Regstation from "./components/Registion Form";
import CountryDetails from "./components/countrydetails";
import Regstation_Details from "./components/Registation Form Details";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from './components/counter';
import Contact from "./components/contactform";
import Cart from "./components/cart";
import Product from "./components/Product";
import Submit from "./components/submitform";
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
   children:[
     {
       path:'/Home',
       element:<Home></Home>,
       children:[
       ]
      },
      {
        path:'/pricing',
        element:<Price></Price>,
      },
      {
        path:'/Student',
        element:<Student></Student>,
      },
      {
        path:'/employeetable',
        element:<Employee></Employee>,
      },
      {
        path:'/Registion Form',
        element:<Regstation></Regstation>,
      },
      {
        path:'/Registation Form Details',
        element:<Regstation_Details></Regstation_Details>,
      },
      {
        path:'/countryDetails/:cname',
        element:<CountryDetails></CountryDetails>,
      },
      {
        path:'/counter',
        element:<Counter></Counter>
      },
      {
        path:'/Product',
        element:<Product></Product>
      },
      {
        path:'/cantactform',
        element:<Contact></Contact>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:"/submitform",
        element:<Submit></Submit>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
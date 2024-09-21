import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Pagecsbs1 from './components/Pagecsbs1';
import Pagecsbs2 from './components/Pagecsbs2';
import Pagecsbs3 from './components/Pagecsbs3';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
const Applayout = () =>{
  return(
    <>
    <Pagecsbs1/>
    <Pagecsbs2/>
    <Pagecsbs3/>
    
    </>
  )
};

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
  },
  {
  path:"/page1",
  element:<Pagecsbs1/>
},
{
  path:"/page2",
  element:<Pagecsbs2/>
},
{
  path:"/page3",
  element:<Pagecsbs3/>,
}]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

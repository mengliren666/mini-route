import React from 'react';
import { useRoutes } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom';
export default function MyRouter() {
    const element = useRoutes([
        {
            path: '/',
            element: LazyLoad('Home'),
        },
        {
            path: '/Login',
            element: LazyLoad('Login')    
        }
    ]);
    return (
    //这是hash或history都可以
      <BrowserRouter> 
      {
        element
      }
      </BrowserRouter>
    )
}

const LazyLoad = (path) => {
    const LazyComponent = React.lazy(() => import(`../views/${path}`))
    return (
        <React.Suspense fallback={<>...加载中</>}>
            <LazyComponent />
        </React.Suspense>
    )
}
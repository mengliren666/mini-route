import { useRoutes,BrowserRouter } from '../mini-route'
import React from "react";
export default function MyRouter() {
    const element = useRoutes([
        {
            path: '/',
            element: LazyLoad('Index'),
            children: [
                {
                    path: '/',
                    element: LazyLoad('MyChildren'),
                },
                {
                    path: 'Cart',
                    element: LazyLoad('Cart'),
                }
            ]
        },
        {
            path: '/my',
            element: LazyLoad('My')    
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
    const LazyComponent = React.lazy(() => import(`../view/${path}`))
    return (
      <React.Suspense fallback={<>...加载中</>}>
        <LazyComponent />
      </React.Suspense>
    )
  }
  
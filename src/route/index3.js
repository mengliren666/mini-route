// import {BrowserRouter, Routes, Route} from '../mini-react-router'
import {BrowserRouter, Routes, Route} from '../mini-route'
import React from 'react'
export default function MyRouter() {
    return (
      <BrowserRouter>
         <Routes>
          <Route path='/' element={LazyLoad('index')} >
            <Route path='/' element={LazyLoad('MyChildren')} />
            <Route path='Cart' element={LazyLoad('cart')} >
               <Route path='CartMy' element={LazyLoad('cartMy')} >
                <Route path=':id' element={LazyLoad('cartMyChild')}/>
               </Route>
            </Route>
          </Route>
          <Route path='/my' element={LazyLoad('My')} />
          {/* <Route path='/404' element={<NotFount />} /> */}
         </Routes>
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
  
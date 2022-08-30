import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {BrowserRouter} from 'react-router-dom';
export default function Myrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={LazyLoad('index')}>
          <Route path='MyChildren' element={LazyLoad('MyChildren')}/>
          </Route>
        <Route path='/My' element={LazyLoad('My')}/>
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

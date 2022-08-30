
import Routes from './Routes'
import Route  from './Route'
import BrowserRouter from './BrowserRouter.js';
import Link  from './Link'
import Outlet  from './Outlet'
import useNavigate from './useNavigate';
import useParams from './useParams';
import { useRoutes } from './useRoutes2';
export {
  Route,
  Routes,
  BrowserRouter,
  Link,
  Outlet,
  useNavigate,
  useParams,
  useRoutes
}


  
//   const LazyLoad = (path) => {
//     const LazyComponent = React.lazy(() => import(`../view/${path}`))
//     return (
//       <React.Suspense fallback={<>...加载中</>}>
//         <LazyComponent />
//       </React.Suspense>
//     )
//   }
  
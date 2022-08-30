import useLocation from "./useLocation";
// import {normalizePathname} from "./utils";
import {RouteContext} from "./Context"
import { matchRoutes } from "react-router-dom";
// import Outlet from "./Outlet";
// import { isValidElement } from "react"




// function ShouJi (routes,_obj,pathname){
//   let obj = _obj
//   let RouteObj = routes
//   RouteObj.forEach(route => {
//     let routePath = route.path //记录第一层的route路径
//     console.log("ddd",normalizePathname(routePath));
//     console.log("xxx",pathname);
//     // debugger
//     if(normalizePathname(routePath) === pathname){
//         if(route.children){
//             let _routes = route.children
//             console.log("子元素",_routes);
//             _routes.forEach(_route => {
//               if(route.path ==="/" && _route.path ==="/" ) _route.path =  route.path 
//               if(route.path !=="/" && _route.path !=="/") _route.path = route.path +"/"+ _route.path
//               if(route.path === "/" && _route.path !=="/") _route.path =  route.path + _route.path
//               console.log( " _route.path",_route.path);
//               _route.fatherElement = route.element
//               let arr= [_route]
//               obj[_route.path] = <RouteContext.Provider value={ route.element } children={route.fatherElement }/>
//               ShouJi(arr,obj,pathname)
//             })
//            }else{
//             obj[routePath] = route.element
//           }
      
//     }
//     //  if(route.children){
//     //   let _routes = route.children
//     //   console.log("子元素",_routes);
//     //   _routes.forEach(_route => {
//     //     if(route.path ==="/" && _route.path ==="/" ) _route.path =  route.path 
//     //     if(route.path !=="/" && _route.path !=="/") _route.path = route.path +"/"+ _route.path
//     //     if(route.path === "/" && _route.path !=="/") _route.path =  route.path + _route.path
//     //     console.log( " _route.path",_route.path);
//     //     _route.fatherElement = route.element
//     //     let arr= [_route]
//     //     ShouJi(arr,obj)
//     //   })
      
//     //  }
//   });
//   return obj
// }

function renderMatches(matches) {
    if (matches == null) {
      return null;
    }
     //从末到尾遍历
    return matches.reduceRight((pre, match) => {
      return (
        <RouteContext.Provider
          value={{ outlet: pre,matches }}   //子组件
          children={match.route.element}  //父组件
        />
      );
    }, null);
  }


export function useRoutes(routes) {
    let location = useLocation()
   
    let pathname = location.pathname;  //拿到url后缀名，例如是product路由页面，就拿到/product
    const matches = matchRoutes(routes, { pathname });
    console.log("matches",matches);
    return renderMatches(matches);
 


    // let _pathname = pathname
    // let Obj = {...ShouJi(routes,{},pathname)};
    // console.log("收集",Obj);
    // console.log(isValidElement(Obj[_pathname]));
    // console.log("11222",Obj[_pathname]);
    // return (Obj[_pathname])
   
  }

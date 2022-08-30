import useLocation from "./useLocation";
import {normalizePathname} from "./utils";
import {RouteContext} from "./Context"

export function useRoutes(routes) {
    let location = useLocation()
   
    let pathname = location.pathname;  //拿到url后缀名，例如是product路由页面，就拿到/product
    let Obj = {...ShouJi(routes,{},pathname)};
    return (Obj[pathname])
  }

  function ShouJi (routes,_obj,pathname){
    let obj = _obj
    let RouteObj = routes
    RouteObj.forEach(route => {
      let routePath = route.path //记录第一层的route路径
      // debugger
      if(route ===null){
        return null
      }
      /*一开始进来的时候其实normalizePathname(routePath) 和 pathname 是相等的，但我先不渲染它有子路由的情况，
      先让他渲染自己本身，到下面判断它有子路由的时候,再递归回来渲染它*/
      if(normalizePathname(routePath) !== pathname){
        obj[routePath] = <RouteContext.Provider value={ {outlet : route.element} } children={route.fatherElement }/>
      }else{
        console.log(222);
        //渲染本身，只有一层的时候也是这样
        obj[routePath] = route.element
      }
      //如果你还嵌套子路由
       if(route.children){
        let _routes = route.children
        _routes.forEach(_route => {
          //父和子都是一个"/"的情况
          if(route.path ==="/" && _route.path ==="/" ) _route.path =  route.path 
           //父和子都不是一个"/"的情况
          if(route.path !=="/" && _route.path !=="/") _route.path = route.path +"/"+ _route.path
          //父是一个"/",子不是"/"的情况
          if(route.path === "/" && _route.path !=="/") _route.path =  route.path + _route.path
          console.log( " _route.path",_route.path);
            _route.fatherElement = route.element  //携带上父路由组件
          let arr= [{..._route}]
          ShouJi(arr,obj) //递归，这里就不给pathname了，这样子才能传递Outlet
        })
       }
    });
    return obj
  }
  
  




//   const matches = matchRoutes(routes, { pathname });
//   // console.log("matches", matches); //sy-log

//   return renderMatches(matches);
// }

// function renderMatches(matches) {
//   if (matches == null) {
//     return null;
//   }
 
//   return matches.reduceRight((outlet, match) => {
//     return (
//       <RouteContext.Provider
//         value={{ outlet, matches }}
//         children={match.route.element || outlet}
//       />
//     );
//   }, null);







// if(route.children){
//   return(
//     route.children.map((child) => {
//       console.log("child",child);
//       //防止你加了很多"/"
//       let m = normalizePathname(child.path) === pathname;
//       return (
//         m && (
//           <RouteContext.Provider
//             value={{ outlet: child.element }} //达到神奇的路由嵌套效果
//             children={
//               route.element  || <Outlet />  //这里依旧渲染route.element，不然怎么达到嵌套效果
//             }
//           />
//         )
//       );
//     })
//   )
// }else{
//   return route.element
// }




// return routes.map((route) => {

//   // let routePath = route.path //记录第一层的route路径

//   //如果pathname和route.path都是以"/"开头相同，才渲染，
//   const match = pathname.startsWith('/');
//   console.log("match",match);
//   console.log("route",route); //如果在浏览器输入的url和某一个route的path匹配上，才渲染那个路由页面
//   if(match){
//     if(route.children){
//       console.log(route);
//       return(
//         route.children.map((child) => {
//           console.log("child",child);
//           //防止你加了很多"/"
//           let m = normalizePathname(child.path) === pathname;
//           return (
//             m && (
//               <RouteContext.Provider
//                 value={{ outlet: child.element }} //达到神奇的路由嵌套效果
//                 key={m}
//                 children={
//                   route.element  || <Outlet />  //这里依旧渲染route.element，不然怎么达到嵌套效果
//                 }
//               />
//             )
//           );
//         })
//       )
//     }else{
//       console.log(route.element);
//       return route.element
//     }
//   }
// });

 // **疑问，path路径不拼接吗？？？
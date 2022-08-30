import useLocation from "./useLocation";
import {normalizePathname} from "./utils";
import {RouteContext} from "./Context"

export function useRoutes(routes) {
    let location = useLocation()
   
    let pathname = location.pathname;  //拿到url后缀名，例如是product路由页面，就拿到/product
    let Obj = {...ShouJi(routes,{},pathname,[])};
    return (Obj[pathname])
  }

  function ShouJi (routes,_obj,pathname,arrRoutes){
    let obj = _obj
    let RouteObj = routes
    let _pathname = pathname
    let _arrRoutes  =arrRoutes
    
    RouteObj.forEach(route => {
      let routePath = route.path //记录第一层的route路径
      // debugger
    //   console.log(RouteObj);
      if(route ===null){
        return null
      }
      /*一开始进来的时候其实normalizePathname(routePath) 和 pathname 是相等的，但我先不渲染它有子路由的情况，
      先让他渲染自己本身，到下面判断它有子路由的时候,再递归回来渲染它*/
      if(routePath === pathname ){
        if(!route.children){
            console.log(111111,route);
            obj[routePath] = route.element
            return
           }
        }
        console.log("route",route);
         //如果你还嵌套子路由
         if(route.children){
            _arrRoutes.push(route)
            let _routes = route.children
            _routes.forEach(_route => {

              //父和子都是一个"/"的情况
              if(route.path ==="/" && _route.path ==="/" ) _route.path =  route.path 
               //父和子都不是一个"/"的情况
              if(route.path !=="/" && _route.path !=="/") _route.path = route.path +"/"+ _route.path
              //父是一个"/",子不是"/"的情况
              if(route.path === "/" && _route.path !=="/") _route.path =  route.path + _route.path
             
               console.log("route路径",_route.path);
               console.log("pathname",pathname);
               if(_route.path===pathname){
                if(_arrRoutes.length > 0) _arrRoutes.push(_route)
                if(_arrRoutes.length <=0){_arrRoutes.push(route,_route)} 
                console.log("arrRoutes111",_arrRoutes);
                routePath = _route.path
               }else{
                let arr= [{..._route}]
                 ShouJi(arr,obj,_pathname,_arrRoutes) 
               }
            })
          }
        //  <RouteContext.Provider value={ {outlet : route.element} } children={route.fatherElement }/>
      

      if(routePath === pathname ){
        if(_arrRoutes.length >0){
          let arr_ =   _arrRoutes.filter((o,index,arr)=>{
                return arr.indexOf(o) === index
            })
            console.log(arr_);
            console.log("arrRoutes222",_arrRoutes);
            obj[routePath] = arr_.reduceRight((pre, match) => {
              return (
                <RouteContext.Provider
                  value={{ outlet: pre}}   //子组件
                  children={match.element}  //父组件
                />
              );
            }, null);
        }
      }
       
    });
    return obj
  }
  
  




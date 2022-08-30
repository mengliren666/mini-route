import {useRoutes} from "./useRoutes2";
import React, { isValidElement } from "react";
export function createRoutesFromChildren(children) {
    let routes = []; //收集route
    //遍历<Route index element={<Home />} />里面的属性
    React.Children.forEach(children, (child) => {
        //判断是不是react元素
      if (!isValidElement(child)) {
        return;
      }
      let route = {
        element: child.props.element, //路由页面
        path: child.props.path, //路径
        id:Math.round(Math.random()*10000)
      };
      //如果还套有一层，就再走一遍这个函数，相当于递归
      if (child.props.children) {
        route.children = createRoutesFromChildren(child.props.children);
      }
      //push到数值里面去
      routes.push(route);
    });
  
    return routes;
  }
export default function Routes({ children }) {
    //收集route
    let routes = createRoutesFromChildren(children);
    console.log(routes);
    return useRoutes(routes); //匹配路径渲染页面
  }

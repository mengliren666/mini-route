import React from 'react';
//创建一个NavigationContext，让NavigationContext.Provider下面的子组件都共享它的值, “ 找最近的 ”
const NavigationContext = React.createContext();
const RouteContext = React.createContext();

export { NavigationContext, RouteContext };


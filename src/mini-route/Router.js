import { NavigationContext } from "./Context";
import React from "react";
export default function Router({navigator,children,location}){
    //接收BrowserRouter传递过来的children和navigator
    //缓存navigator值,也就是history
    let navigationContext = React.useMemo(
      () => ({ navigator, location }),
      [navigator, location]
    );
    return (
      <NavigationContext.Provider value={navigationContext}>{children} </NavigationContext.Provider>
    )
}

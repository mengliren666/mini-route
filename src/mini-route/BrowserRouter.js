import Router from "./Router"
import React,{useRef,useState,useLayoutEffect} from "react"
import {createBrowserHistory} from "history"//https://github.com/remix-run/history/blob/dev/docs/getting-started.md  ,   BrowserHistory、HashHistory和的共享接口MemoryHistory
export default function BrowserRouter({ children}){

    //防止createBrowserHistory()多次渲染更新，利用ref把它缓存起来
    const historyRef = useRef(null)
    //只要它存在值了，就不会重新赋值一次，否则就重新赋值
    if(historyRef.current ===null){
        historyRef.current = createBrowserHistory() //拿到浏览器的历史记录信息,
    }
    //赋值
    const history = historyRef.current   //history有很多方法，例如push去到下个页面，back回退，go前进后退几步等等
   const [hisLocation, setHisLocation] = useState(history.location) //location是监听页面url的变化
    //这是使用的是useLayoutEffect，是为了在dom元素挂载后同步执行,其实使用UseEffect也没有关系，同样监听到路由变化了,组件也会重新渲染一次
    useLayoutEffect(()=>{
       history.listen(({location})=>{
        setHisLocation(location);//监听location的变化
       })
    },[history])
    return (
        <Router children={children} navigator={history} location={hisLocation}></Router>
    )
}



/*history传递  BrowserRouter 拿到history值  -->
               Router通过return出<NavigationContext.Providervalue={navigationContext}>{children} </NavigationContext.Provider> --> 
               routes -->   useRoutes 拿到location.pathname匹配路由渲染页面
               route --> 
               route的element里面的相关组件，例如：<My> 
               <Link to='/xxx'/>  navigator跳转
               这样子层层传递，实现跳转功能： history.push("/My")
  
*/
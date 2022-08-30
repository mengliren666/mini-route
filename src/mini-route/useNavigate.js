import {useContext}from 'react'
import { NavigationContext } from './Context'
export default function useNavigate() {
//接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <NavigationContext.Provider> 的 value prop 决定。
  const {navigator} = useContext(NavigationContext)
  return navigator.push //这里的navigator就是history，history.push
}

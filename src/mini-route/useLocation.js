//让组件状态更新,我说为啥切换路由了，页面不改变
import {NavigationContext} from './Context'
import {useContext} from 'react';
export default function useLocation(){
   const {location} = useContext(NavigationContext)
   return location
}
import { useContext } from "react";
import { RouteContext } from "./Context";
export default function useOutlet(){
    const  {outlet}  = useContext(RouteContext);
  return outlet;
}
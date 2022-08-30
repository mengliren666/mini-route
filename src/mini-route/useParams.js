import { useContext } from "react";
import { RouteContext } from "./Context";
export default function useParams() {
    const { matches } = useContext(RouteContext);
  
    const routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
  }
  
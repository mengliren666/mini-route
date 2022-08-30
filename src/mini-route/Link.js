import React from 'react'
import useNavigate from './useNavigate';
export default function Link({to,children}) {
    const navigate = useNavigate(); //得到history.push
    const handleClick = (e) => {
        //阻止默认事件
        e.preventDefault();
        console.log(to);
        navigate(to) //例如传个'/My'，就相当于history.push("/My")
    }
  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
}

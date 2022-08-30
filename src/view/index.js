import React from 'react'
import MyStyle from './style'
import {Link, Outlet} from '../mini-route'
// import {Link, Outlet } from "../mini-react-router"
// import {Link, Outlet} from 'react-router-dom'
export default function Index() {
  return (
    <MyStyle>
        <div className='top'>MyIndex</div>
        <div className='bom'>
        <Link to='/' key="child">child</Link>
        <Link to='/Cart' key="Cart">cart</Link>
        <Link to='/my' key='my'>去My页面</Link>
        </div>
        <Outlet />
    </MyStyle>
  )
}


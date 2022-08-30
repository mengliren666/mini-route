import React from 'react'
import { Link, Outlet } from '../mini-route'
export default function Cart() {
  return (
    <>
    <div>cart</div>
    <Link to='/Cart/CartMy'>Cart</Link>
    <Outlet/>
    </>
  )
}

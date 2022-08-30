import React from 'react'
import {useParams} from "../mini-route"
export default function CartMy() {
  const params = useParams()
  return (
    <>
    <div>cartMy</div>
     <div>{params.id}</div>
    </>
  )
}

import React from 'react'
import { Product } from '../models/IProducts'
import { NavLink, useNavigate } from 'react-router-dom'
import { toSeoUrl } from '../utils/util'

function ProductItem(props: {item: Product} ) {

  const navigate = useNavigate()   
  const sendObj = () =>  {
    navigate('/productDetail/1', {state: props.item})
  }  

  return (
    <div className='col-sm-4'>
        <div className="card">
            <img src={props.item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.price}</p>
                <NavLink className="btn btn-primary btn-sm" to={'/productDetail/'+toSeoUrl(props.item.title)+'/'+props.item.id}>Detail</NavLink>
                <NavLink className="btn btn-danger btn-sm" to={'/productDetail/1?name='+props.item.title}>Query Detail</NavLink>
                <button className="btn btn-success btn-sm" onClick={ sendObj }>Send Obj</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
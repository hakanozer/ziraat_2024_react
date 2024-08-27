import React from 'react'
import { Product } from '../models/IProducts'

function ProductItem(props: {item: Product} ) {
  return (
    <div className='col-sm-4'>
        <div className="card">
            <img src={props.item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text">{props.item.price}</p>
                <a href="#" className="btn btn-primary">Detail</a>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
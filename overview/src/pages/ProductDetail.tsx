import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import { findByProductId } from '../services/productService'
import { likeControl } from '../utils/util'

function ProductDetail() {

  const navigate = useNavigate()  
  const {id, cid} = useParams() // path variable
  const [search, setSearch] = useSearchParams() // query string
  const location = useLocation() // object

  const [productItem, setProductItem] = useState<Product>()
  const [bigImage, setBigImage] = useState('')

  useEffect(() => {
    const obj = location.state
    if (obj) {
        const pro = obj as Product
        console.log(pro)
    }else {
        //navigate('/dashboard')
    }
    
    const name  = search.get('name')
    if (name) {
        console.log(name)
    }
    if (id) {
        findByProductId(id).then(res => {
            const item = res.data
            setProductItem(item)
            //setBigImage(item.images[0])
        })
    }
    }, [])


    useEffect(() => {
        if (productItem && productItem.images[0]) {
            setBigImage(productItem.images[0])
        }
    }, [productItem])

  const addRemoveLike = (id: number) => {
    likeControl(id)
  }  
  return (
    <>
        { productItem &&
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>{productItem.title}</h2>
                    <p>{productItem.description}</p>
                    <h3>{productItem.price}</h3>
                    <i onClick={ () => addRemoveLike(productItem.id) } role='button' className="bi bi-suit-heart" style={{fontSize: 30,}}></i>
                </div>
                <div className='col-sm-6'>
                    <img src={bigImage} className='img-fluid' />
                    <hr></hr>
                    { productItem.images.map((item, index) => 
                        <img onClick={() => setBigImage(item)} src={item} key={index} className='img-thumbnail' style={{width: 125, }} />
                    )}
                </div>
            </div>
        }
    </>
  )
}

export default ProductDetail
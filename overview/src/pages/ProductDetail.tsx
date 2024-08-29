import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import { findByProductId } from '../services/productService'
import { likeControl } from '../utils/util'
import { useDispatch, useSelector } from 'react-redux'
import { ILikeAction } from '../useRedux/ILikeAction'
import { LikesEnum } from '../useRedux/LikesEnum'
import { StateType } from '../useRedux/store'
import Seo from '../components/Seo'

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


    const selector = useSelector((item:StateType) => item.LikesReducer)
    const [likesStatus, setLikesStatus] = useState(-1)
    useEffect(() => {
        if (id) {
            const index = selector.findIndex(item => item === Number(id))
            setLikesStatus(index)
        }
    }, [selector])

    useEffect(() => {
        if (productItem && productItem.images[0]) {
            setBigImage(productItem.images[0])
        }
    }, [productItem])

  const dispatch = useDispatch()  
  const addRemoveLike = (id: number) => {
    likeControl(id)
    const sendObj:ILikeAction = {
        type: LikesEnum.LIKE_ADD,
        payload: id
    }
    dispatch(sendObj)
  }  
  return (
    <>
        { productItem &&
            <>
            <Seo title={productItem.title} desc={productItem.description} />
            <div className='row'>
                <div className='col-sm-6'>
                    <h2>{productItem.title}</h2>
                    <p>{productItem.description}</p>
                    <h3>{productItem.price}</h3>
                    <i onClick={ () => addRemoveLike(productItem.id) } role='button' className="bi bi-suit-heart-fill" style={{fontSize: 30, color: likesStatus === -1 ? '' : 'red' }}></i>
                </div>
                <div className='col-sm-6'>
                    <img src={bigImage} className='img-fluid' />
                    <hr></hr>
                    { productItem.images.map((item, index) => 
                        <img onClick={() => setBigImage(item)} src={item} key={index} className='img-thumbnail' style={{width: 125, }} />
                    )}
                </div>
            </div>
            </>
        }
    </>
  )
}

export default ProductDetail
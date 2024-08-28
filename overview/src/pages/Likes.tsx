import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { findByProductId } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import axios from 'axios'

function Likes() {
  
  const [arr, setArr] = useState<Product[]>([])
  const selector = useSelector((item:StateType) => item.LikesReducer)
  useEffect(() => {
    /*
    selector.forEach(async item => {
      findByProductId(''+item).then(res => {
        const data = res.data
      })
      const ser = await findByProductId(''+item)
      setArr( prev => [...prev, ser.data])
    })
    console.log("finish")
    */
   axios.all(selector.map((item) => findByProductId(''+item) )).then(resArr => {
    const arrPro:Product[] = []
    resArr.map(res => {
      const data = res.data
        arrPro.push(data)
    })
    setArr(arrPro)
   })
  }, [])

  return (
    <div>
      <div className='row'>
        { arr.map((item, index) => 
          <ProductItem key={index} item={item} />
        )}
      </div>
    </div>
  )

}

export default Likes
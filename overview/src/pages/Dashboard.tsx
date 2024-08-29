import React, { useEffect, useState } from 'react'
import { allProduct } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import Seo from '../components/Seo'

function Dashboard() {

  const [arr, setArr] = useState<Product[]>([])
  useEffect(() => {
    allProduct().then(res => {
      const dt = res.data
      setArr(dt.products)
      console.log(dt)
    })
  }, [])
  
  return (
    <>
    <Seo title='Products' desc='Products Desc' />
    <div className='row'>
      { arr.map((item, index) => 
        <ProductItem key={index} item={item} />
      )}
    </div>
    </>
  )
}

export default Dashboard
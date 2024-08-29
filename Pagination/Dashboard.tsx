import React, { useContext, useEffect, useState } from 'react'
import { allProducts } from '../utils/api'
import { IProducts, Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import Pagination from '../components/Pagination'
import loadGif from '../assets/loading.gif'
import { PageCountContext } from '../context/PageCountContext'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { Helmet } from 'react-helmet'

function Dashboard() {

  // use redux read data
  const quotes = useSelector((item: StateType) => item.QuotesReducer) 

  const pageContext = useContext(PageCountContext)
  const [products, setProducts] = useState<IProducts | null>()
  useEffect(() => {
    fncGetProduct(0)
  }, [])

  const limit  = 27
  const fncGetProduct = (skip: number) => {
    pageContext.setCountPage((skip / limit) + 1)
    setProducts(null)
    allProducts(skip, limit).then(res => {
      const obj = res.data
      setProducts(obj)
    })
  }


  return (
    <>
      <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard Detail" />
      </Helmet>
      <h2>Dashboard</h2>
      <div className="alert alert-light" role="alert">
      {quotes.quote}
      </div>
      { !products &&
          <center><img src={loadGif} width={100} /></center>
      }
        { products && 
          <>
            <div className='row'>
              { products.products.map((item, index) => 
                <ProductItem key={index} item={item} />
              )}
            </div>
            <Pagination products={products} limit={limit} fncGetProduct={fncGetProduct}  />
          </>
        }
      
    </>
  )

}

export default Dashboard
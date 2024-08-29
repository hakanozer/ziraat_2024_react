import React, { useEffect, useState } from 'react'
import { IProducts } from '../models/IProducts'

function Pagination( props: {products: IProducts | null, limit: number, fncGetProduct: (skip: number) => void} ) {
  
  const [pages, setPages] = useState<number[]>([])
  let count = 0
  let countArr:number[] = []
  useEffect(() => {
    if (props.products) {
        count = Math.ceil(props.products.total / props.limit)
        for (let i = 0; i < count; i++) {
            countArr.push(i)
        }
        setPages(countArr)
    }
  }, [])


  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
            <li className='page-item'><a className='page-link'>Total: {props.products?.total} - {props.products?.skip} / { (props.products!.skip +  props.limit)}</a></li>
            {pages.map((item, index) => 
                <li onClick={() => props.fncGetProduct(item * props.limit) } key={index} className="page-item"><a className={ "page-link" + (props.products?.skip  == item * props.limit ? ' active': '') }  role='button'>{item + 1}</a></li>
            )}
        </ul>
    </nav>
  )

}

export default Pagination
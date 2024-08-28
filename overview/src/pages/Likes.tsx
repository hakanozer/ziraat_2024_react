import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'

function Likes() {
  
  const selector = useSelector((item:StateType) => item.LikesReducer)
  return (
    <div>
        {JSON.stringify(selector)}
    </div>
  )

}

export default Likes
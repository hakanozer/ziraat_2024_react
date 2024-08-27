import React from 'react'
import { getUser } from '../utils/util'
import { Navigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Control(props: { item: JSX.Element }) {
  const user = getUser()
  return (
    <>
    { user 
    ? 
    <>
        <NavBar user={user} />
        {props.item}
    </> 
    : <Navigate to='/' /> }
    </>
  )
}

export default Control
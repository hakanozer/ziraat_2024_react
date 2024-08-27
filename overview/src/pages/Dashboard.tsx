import React from 'react'
import { getUser } from '../utils/util'


function Dashboard() {
  const user = getUser()
  if (user) {
    console.log(user.token)
  }
  

  return (
    <>
     <h2>Dashboard</h2>
    </>
  )
}

export default Dashboard
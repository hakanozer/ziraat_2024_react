import React, { FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()  

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = (evt: FormEvent) => {
    evt.preventDefault() // sayfayı yenilemeyi durdur.
    if (username === 'ali01' && password === '12345') {
        //window.location.href = '/dashboard'
        navigate('/dashboard')
    }
  }  

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                <form onSubmit={userLogin}>
                    <div className='mb-3'>
                        <input required onChange={(evt) => setUsername(evt.target.value)} className='form-control' placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <input required onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                    <NavLink to='/register'>Register</NavLink>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login
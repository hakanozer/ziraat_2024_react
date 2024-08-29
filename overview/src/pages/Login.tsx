import React, { FormEvent, useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userServiceLogin } from '../services/userService'
import { IUser } from '../models/IUser'
import { encrypt } from '../utils/util'
import { Context } from '../utils/AppContext'
import Seo from '../components/Seo'

function Login() {

  const navigate = useNavigate() 
  const context = useContext(Context) 

  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const userLogin = (evt: FormEvent) => {
    evt.preventDefault() // sayfayı yenilemeyi durdur.
    setErrorMessage('')
    userServiceLogin(username, password).then(res => {
        const dt = res.data
        const json = JSON.stringify(dt)
        const cipherText = encrypt(json)
        localStorage.setItem('user', cipherText)
        context.setEmail(dt.email)
        navigate('/dashboard', {replace: true})
    }).catch(err => {
        const status = err.status
        const errmessage = err.message
        const serverMessage = err.response.data.message
        console.log(status, errmessage, serverMessage)
        setErrorMessage(serverMessage)
    })
  }  



  return (
    <>
        <Seo title='Login Page' desc='Login Desc' />
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                { errorMessage !== '' &&  
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Error!</strong> {errorMessage}
                        <button onClick={() => setErrorMessage('')} type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                }
                <form onSubmit={userLogin}>
                    <div className='mb-3'>
                        <input defaultValue={username} required onChange={(evt) => setUsername(evt.target.value)} className='form-control' placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <input defaultValue={password} required onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                    <NavLink to='/register' className='btn btn-danger'>Register</NavLink>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login
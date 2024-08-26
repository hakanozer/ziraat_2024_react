import React, { FormEvent, useState } from 'react'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = (evt: FormEvent) => {
    evt.preventDefault() // sayfayı yenilemeyi durdur.
    console.log(username, password)
  }  

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                <h3>{username}</h3>
                <form onSubmit={userLogin}>
                    <div className='mb-3'>
                        <input required onChange={(evt) => setUsername(evt.target.value)} className='form-control' placeholder='Username' />
                    </div>
                    <div className='mb-3'>
                        <input required onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
                    </div>
                    <button className='btn btn-success'>Send</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login
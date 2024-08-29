import { useFormik } from 'formik'
import React from 'react'
import { RegisterSchema } from '../schemas/RegisterSchema'

function Register() {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      nameSurname: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: values => {
      fncRegister()
    }
  })

  const fncRegister = () => { 
    console.log(values)
  }

  return (
    <>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <input name='nameSurname' onChange={handleChange} className='form-control' placeholder='Name / Surname' />
            </div>
            <div className='mb-3'>
              <input name='email' onChange={handleChange} className='form-control' placeholder='E-Mail' />
            </div>
            <div className='mb-3'>
              <input name='password' onChange={handleChange} type='password' className='form-control' placeholder='Password' />
            </div>
            <button type='submit' className='btn btn-success'>Send</button>
          </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </>
  )
}

export default Register
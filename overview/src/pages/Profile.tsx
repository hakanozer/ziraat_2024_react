import React, { FormEvent } from 'react'

function Profile() {

  const sendForm = (evt: FormEvent) => {

  }

  return (
    <>
        <form onSubmit={sendForm}>
          <div className='mb-3'>
            <input className='form-control' placeholder='Name' />
          </div>
          <div className='mb-3'>
            <input className='form-control' placeholder='Surname' />
          </div>
          <button className='btn btn-danger'>Send</button>
        </form>
    </>
  )
}

export default Profile
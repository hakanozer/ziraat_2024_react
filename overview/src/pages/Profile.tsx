import React, { FormEvent, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../utils/AppContext'

function Profile() {

  const context = useContext(Context)
  const [nameData, setNameData] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const surnameRef = useRef<HTMLInputElement>(null)
  const formRef = useRef(null)
  useEffect(() => {
    if (nameRef && nameRef.current) {
      nameRef.current.focus()
      //nameRef.current.style.backgroundColor = 'red'
    }
  }, [])

  const sendForm = (evt: FormEvent) => {
    evt.preventDefault()
    const name = nameRef.current?.value
    const surname = surnameRef.current?.value
    console.log(name, surname)
    if (name === '') {
      nameRef.current?.focus()
    }else if (surname === '') {
      surnameRef.current?.focus()
    }else {
      context.setEmail(name!)
      console.log("form Send")
    }
  }

  useEffect(() => {
    console.log(nameData)
  }, [nameData])

  const [surname, setSurname] = useState('')
  const call = useCallback( () => {
    console.log("useCallback call", surname)
  }, [surname] )

  return (
    <>
        <form ref={formRef} onSubmit={sendForm} className='mt-3 col-sm-4'>
          <div className='mb-3'>
            <input onChange={(evt) => context.setEmail(evt.target.value)} ref={nameRef} className='form-control' placeholder='Name' />
          </div>
          <div className='mb-3'>
            <input onChange={(evt) => setSurname(evt.target.value)} ref={surnameRef} className='form-control' placeholder='Surname' />
          </div>
          <button className='btn btn-danger'>Send</button>
          <button onClick={call} className='btn btn-success'>Call</button>
        </form>
        
    </>
  )
}

export default Profile
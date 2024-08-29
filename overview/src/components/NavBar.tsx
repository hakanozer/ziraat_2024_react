import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IUser } from '../models/IUser'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../useRedux/store'
import { getAllLikes } from '../utils/util'
import { ILikeAction } from '../useRedux/ILikeAction'
import { LikesEnum } from '../useRedux/LikesEnum'
import { Context } from '../utils/AppContext'

function NavBar( props: {user: IUser} ) {

  const context = useContext(Context)

  const dispatch = useDispatch()  
  const selector = useSelector((item:StateType) => item.LikesReducer)
  useEffect(() => {
    const arr = getAllLikes()
    arr.forEach(item => {
        const sendObj: ILikeAction = {
            type: LikesEnum.LIKE_ADD,
            payload: item
        }
        dispatch(sendObj)
    })
  }, [])

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/', {replace: true})
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/likes'>Likes</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {context.email}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a role='button' onClick={logout} className="dropdown-item">Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{props.user.firstName} {props.user.lastName} ({selector.length})</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default NavBar
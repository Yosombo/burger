import React from 'react'
import css from './Logo.module.css'
import logoImage from '../../assets/images/burger-logo.png'
import {NavLink}from 'react-router-dom'
const Logo = props => {
    return (
        <div className={css.Logo}>
        <NavLink to="/">
           <img src={logoImage} alt="logo"/>
        </NavLink>

        </div>
    )
}

export default Logo

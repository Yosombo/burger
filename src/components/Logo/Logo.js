import React from 'react'
import css from './Logo.module.css'
import logoImage from '../../assets/images/burger-logo.png'
function Logo() {
    return (
        <div className={css.Logo}>
            <img src={logoImage} alt="logo"/>
        </div>
    )
}

export default Logo

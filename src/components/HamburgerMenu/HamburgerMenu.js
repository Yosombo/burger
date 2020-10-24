import React from 'react'
import css from './HamburgerMenu.module.css'

function HamburgerMenu(props) {
    return (
        <div onClick={props.toggleSidebar} className={css.HamburgerMenu}>
         <div></div>
         <div></div>
         <div></div>
        </div>
    )
}

export default HamburgerMenu

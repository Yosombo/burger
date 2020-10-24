import React from 'react'
import Shadow from '../General/Shadow/Shadow'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import css from './Sidebar.module.css'

function Sidebar(props) {
    let classes = [css.Sidebar, css.Close]

    if(props.showSidebar){
        classes = [css.Sidebar, css.Open]
    }
    
    return (
        <div>
            <Shadow onClicked={props.toggleSidebar} show={props.showSidebar}/>
        <div onClick={props.toggleSidebar} className={classes.join(" ")}>
            <div className={css.Logo}>
         <Logo/>   
            </div>
        <Menu/>
        </div>
                    
        </div>
    )
}

export default Sidebar

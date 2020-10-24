import React from 'react'
import css from './Shadow.module.css'
function Shadow(props) {
       return props.show ? <div className={css.Shadow} onClick={props.onClicked}></div> : null
   } 


export default Shadow

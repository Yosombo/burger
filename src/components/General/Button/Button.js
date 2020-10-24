import React from 'react'
import css from './Button.module.css'
function Button(props) {
    return (
        <button onClick={props.clicked} className={`${css.Button} ${css[props.btnType]}`}>
            {props.text}
        </button>
    )
}

export default Button

import React, {Fragment} from 'react'
import css from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem';
import { connect } from 'react-redux';

function Menu(props) {
    return (
        <div>

        <ul className={css.Menu}>
    
            {props.userId ? <Fragment>
            <MenuItem exact link="/">New order</MenuItem>
            <MenuItem  link="/orders">Orders</MenuItem>
            <MenuItem  link="/logout">Log out</MenuItem>
            </Fragment>
                     : 
            <Fragment>
            <MenuItem  link="/login">Log in</MenuItem>
            <MenuItem  link="/signup">Sign up</MenuItem>
            </Fragment>}

        </ul>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        userId: state.SignupLoginReducer.userId
    }
}
export default connect(mapStateToProps)(Menu)

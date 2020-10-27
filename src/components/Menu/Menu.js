import React, {useContext} from 'react'
import css from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem';
import UserContext from '../../Context/UserContext';

const Menu=(props)=> {
    const userCtx = useContext(UserContext)
    return (
        <div>
            <ul className={css.Menu}>
        
                {userCtx.state.userId ? <>
                <MenuItem exact link="/">New order</MenuItem>
                <MenuItem  link="/orders">Orders</MenuItem>
                <MenuItem  link="/logout">Log out</MenuItem>
                </>
                        : 
                <>
                <MenuItem  link="/login">Log in</MenuItem>
                <MenuItem  link="/signup">Sign up</MenuItem>
                </>}

            </ul>
        </div>
    )
}
export default Menu

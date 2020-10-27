import React, { useState , useContext} from 'react'
import css from './Login.module.css'
import Button from '../../components/General/Button/Button'
import Spinner from '../../components/General/Spinner/Spinner'
import { Redirect } from 'react-router-dom';
import UserContext from '../../Context/UserContext'

const LoginPage = (props) => {
    const handleEnter=()=>{
        login()
    }
    const userCtx =useContext(UserContext)
    userCtx.useKey("Enter", handleEnter)
    // const [form, setForm] = useState({
    //     email: "",
    //     password: ""
    // });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changeEmail = e => {
        const newEmail = e.target.value;
        setEmail(newEmail)
        // setForm(formBefore => ({
        //     email: newEmail,
        //     password: formBefore.password
        // }))
    };

    const changePassword = e => {
        const newPassword = e.target.value;
        setPassword(newPassword)
        // setForm(formBefore => ({
        //     email: formBefore.email,
        //     password: newPassword
        // }))
    };

    const login =()=>{
        userCtx.loginUser(email, password)
    };

return (
    <div className={css.Login}>
        {userCtx.state.userId && <Redirect to='/orders'/>}
        <input onChange={changeEmail} type="text" placeholder='Email'/>
        <input type="password" onChange={changePassword} placeholder='Password'/>
        {userCtx.state.logginIn && <Spinner/>}
        {userCtx.state.error && <div style={{color: "red"}}>{userCtx.state.error }</div>}
        <Button text="Login"  btnType="Success" clicked={login}/>

    </div>
    )
    
}


export default LoginPage

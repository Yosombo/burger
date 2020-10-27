import React, { useState, useContext } from 'react'
import css from './SignUpPage.module.css'
import Button from '../../components/General/Button/Button'
import Spinner from '../../components/General/Spinner/Spinner';
import {Redirect} from 'react-router-dom'
import UserContext from '../../Context/UserContext'

const SignUpPage = (props)=>{
    const userCtx = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePassword1=(e)=>{
        setPassword1(e.target.value)
    }
    const changePassword2=(e)=>{
        setPassword2(e.target.value)
    }
    
    const signUp =()=>{
        if(password1 === password2){
        userCtx.signupUser(email, password1)

        } 
        else
        {
        setError("Password doesn't match")
        }
    }

        return (
            <div className={css.SignupPage}>
                {userCtx.state.userId && <Redirect to="/"/>}
                <h3>Sign up form</h3>
                <input onChange={changeEmail} type="text" placeholder='Email address'/>
                <input onChange={changePassword1} type="text" placeholder='Enter password'/>
                <input onChange={changePassword2} type="text" placeholder='Re-enter password'/>
                 {error && <div style={{color: "red"}}>{error }</div>}
                 {userCtx.state.error && <div style={{color: "red"}}>{userCtx.state.error }</div>}

                {userCtx.state.saving &&  <Spinner/>}
                <Button text="SIGN UP"  btnType="Success" clicked={signUp}/>
            </div>
        )
    
}

export default SignUpPage;

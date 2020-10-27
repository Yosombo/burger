import React, { useState, useEffect, useRef } from 'react'
import  axios  from '../axiosOrders';
const UserContext = React.createContext();
const initialState ={
    saving: false,
    logginIn: false,
    error: null,
    token: null,
    userId: null,
}
export const UserStore = props =>{
    const[state, setState]= useState(initialState);
    const useKey=(key, cb)=>{
        const callbackRef = useRef(cb)
        useEffect(()=>{
            callbackRef.current = cb
        })
        useEffect(()=>{
            function handle(event){
              if(event.code === key){
                  callbackRef.current(event)
                }
            }
            document.addEventListener('keypress', handle)
            return()=>{
                document.removeEventListener('keypress', handle)}
        },[key])
    }
    const loginUserSuccess = (token, userId, expiresDate, refreshToken)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        localStorage.setItem('expiresDate', expiresDate)
        localStorage.setItem('refreshToken', refreshToken)
        setState({...state, logginIn: false, error: null, userId, token})
    }
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expiresDate')
        localStorage.removeItem('refreshToken')
        setState({initialState})
    }
    const loginUser = (email, password) =>{
        
        setState({...state, logginIn: true})
    
         const data ={
             email,
             password,
             returnSecureToken : true
         }
    
         axios
         .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDeiXK2t1I0A7h1kGNd47CgsD4mWStNTg", data)
         .then(result =>{
             const token = result.data.idToken;
             const userId = result.data.localId;
             const expiresIn = result.data.expiresIn;
             const expiresDate = new Date(new Date().getTime() + expiresIn * 1000)
             const refreshToken = result.data.refreshToken;

            loginUserSuccess(token, userId, expiresDate, refreshToken)
           
         })
         .catch(err =>{
            setState({...state, logginIn: false, error: err.message, token: null, userId: null})
         })
        
    }
    const autologout = (ms) =>{
        setTimeout(()=>{
            logout();
        }, ms)
        }
        
    // autologout(expiresIn *1000)
    const signupUser=(email, password)=>{
        setState({...state, saving: true})

        const data ={
            email,
            password,
            returnSecureToken : true
        }

        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCDeiXK2t1I0A7h1kGNd47CgsD4mWStNTg", data)
        .then(result =>{          
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        setState({...state, saving: false, token, userId, error: null})
        })
        .catch(err =>{
        setState({...state, saving: false, error: err.message, token: null, userId: null})
        })
   }

    return(
        <UserContext.Provider value={{state, signupUser, loginUser, logout, loginUserSuccess, autologout, useKey}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContext
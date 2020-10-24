import  axios  from 'axios';

export const loginUser = (email, password) =>{
    return function(dispatch){
    dispatch(loginUserStart())

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

         localStorage.setItem('token', token)
         localStorage.setItem('userId', userId)
         localStorage.setItem('expiresDate', expiresDate)
         localStorage.setItem('refreshToken', refreshToken)
        dispatch(loginUserSuccess(token, userId))
        dispatch(autologout(expiresIn *1000))
     })
     .catch(error =>{
        dispatch(loginUserError(error))
     })
    }
}

export const loginUserStart = () =>{
    return{
        type: 'LOGIN_USER_START',
    }
}

export const loginUserSuccess = (token, userId) =>{
    return{
        type: 'LOGIN_USER_SUCCESS',
        token,
        userId
    }
}

export const loginUserError = (error) =>{
    return{
        type: 'LOGIN_USER_ERROR',
        error
    }
}

export const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresDate')
    localStorage.removeItem('refreshToken')
    return{
        type: "LOGOUT"
    }
}
export const autologout = (ms) =>{
return function(dispatch){
setTimeout(()=>{
    dispatch(logout())
}, ms)
}
}
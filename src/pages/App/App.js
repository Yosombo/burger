import React, {useState, useEffect, Suspense, useContext} from "react";
import css from "./App.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import { Route, Switch, Redirect } from "react-router-dom";
import ShippingPage from '../ShippingPage/ShippingPage';
import LoginPage from '../LoginPage/LoginPage';
import Logout from '../../components/Logout/Logout'
import {BurgerStore} from '../../Context/BurgerContext'
import {OrderStore} from '../../Context/OrderContext'
import UserContext from '../../Context/UserContext'

const BurgerPage = React.lazy(()=>{
  return import("../BurgerPage/BurgerPage")
})
const OrderPage = React.lazy(()=>{
  return import("../OrderPage/OrderPage")
})
const SignUpPage = React.lazy(()=>{
  return import('../SignUpPAge/SignUpPage')
})

const App = props => {
  const userCtx = useContext(UserContext);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const expiresDate = new Date(localStorage.getItem('expiresDate'))
    const refreshToken = localStorage.getItem('refreshToken')
    if(token){
      if(expiresDate > new Date()){
        userCtx.loginUserSuccess(token, userId, expiresDate, refreshToken)
        userCtx.autologout(
          expiresDate.getTime() - new Date().getTime()
          )
      } else {
        userCtx.logout();
      }
    }
  },[])


const toggleSidebar = () =>{
  setShowSidebar(prevState=> !prevState)
}

    return (
    <div>
      <Toolbar toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
      <main className={css.Content}>
        <Suspense fallback={<div>Loading...</div>}>
          {userCtx.state.userId ? 
          <BurgerStore>
            <Switch>
              <Route path='/logout' component={Logout}/>
              <Route path='/orders'>
                <OrderStore>
                  <OrderPage/>
                </OrderStore>
              </Route>
              <Route path='/ship' component={ShippingPage}/>
              <Route path='/' component={BurgerPage}/>
            </Switch>
          </BurgerStore>
          : (
          <Switch>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Redirect to='/login'/>
          </Switch>)}
        </Suspense>
      </main>
    </div>
    );
  
}


  // const mapDispatchToProps = dispatch =>{
  //   return{
  //     autoLoggin:(token, userID)=> dispatch(actions.loginUserSuccess(token, userID)),
  //     logout: ()=> dispatch(actions.logout()),
  //     autLogout: (ms)=> dispatch(actions.autologout(ms))
  //   }
  // }
export default App;

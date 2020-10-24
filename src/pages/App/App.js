import React, {Component} from "react";
import css from "./App.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import BurgerPage from "../BurgerPage/BurgerPage";
import Sidebar from '../../components/Sidebar/Sidebar';
import OrderPage from "../OrderPage/OrderPage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShippingPage from '../ShippingPage/ShippingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPAge/SignUpPage';
import Logout from '../../components/Logout/Logout'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/LoginActions'
class App extends Component {
 state={
   showSidebar: false,

 }

toggleSidebar = () =>{
  this.setState(prevState =>{
    return {showSidebar: !prevState.showSidebar}
  })
}

componentDidMount(){
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const expiresDate = new Date(localStorage.getItem('expiresDate'))
  const refreshToken = localStorage.getItem('refreshToken')
  if(token){
    if(expiresDate > new Date()){
      this.props.autoLoggin(token, userId)
      this.props.autLogout(
        expiresDate.getTime() - new Date().getTime()
        )
    } else {
      this.props.logout();
    }
  }
}
  render () {
    return (
      <div>
      <Toolbar toggleSidebar={this.toggleSidebar}/>
      <Sidebar showSidebar={this.state.showSidebar} toggleSidebar={this.toggleSidebar}/>
      <main className={css.Content}>
        hi
    {this.props.userId ? 
            <Switch>
        <Route path='/logout' component={Logout}/>
        <Route path='/orders' component={OrderPage}/>
        <Route path='/ship' component={ShippingPage}/>
        <Route path='/' component={BurgerPage}/>
            </Switch>
                     : 
            <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Redirect to='/login'/>
            </Switch>}

      </main>
    </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
      userId: state.SignupLoginReducer.userId
  }
  }
  const mapDispatchToProps = dispatch =>{
    return{
      autoLoggin:(token, userID)=> dispatch(actions.loginUserSuccess(token, userID)),
      logout: ()=> dispatch(actions.logout()),
      autLogout: (ms)=> dispatch(actions.autologout(ms))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(App);

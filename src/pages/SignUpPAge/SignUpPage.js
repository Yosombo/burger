import React, { Component } from 'react'
import css from './SignUpPage.module.css'
import Button from '../../components/General/Button/Button'
import * as actions from '../../redux/actions/SignupActions'
import { connect } from 'react-redux';
import Spinner from '../../components/General/Spinner/Spinner';
import {Redirect} from 'react-router-dom'

class SignUpPage extends Component {
    state={
        email: '',
        password1: '',
        password2: '',
        error: null
    }
    changeEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    changePassword1=(e)=>{
        this.setState({password1: e.target.value})
    }
    changePassword2=(e)=>{
        this.setState({password2: e.target.value})
    }
    
    signUp =()=>{
        if(this.state.password1 ===this.state.password2){
      this.props.signupUser(this.state.email, this.state.password1)
        } 
        else
        {
            this.setState({error: "Password doesn't match"})
        }
    }
    render() {
        return (
            <div className={css.SignUp}>
                {this.props.userId && <Redirect to="/"/>}
                <h1>Sign up from</h1>
                <input onChange={this.changeEmail} type="text" placeholder='Email address'/>
                <input onChange={this.changePassword1} type="text" placeholder='Enter password'/>
                <input onChange={this.changePassword2} type="text" placeholder='Re-enter password'/>
                 {this.state.error && <div style={{color: "red"}}>{this.state.error }</div>}
                 {this.props.firebaseError && <div style={{color: "red"}}>{this.props.firebaseError }</div>}

                {this.props.saving &&  <Spinner/>}
                <Button text="SIGN UP"  btnType="Success" clicked={this.signUp}/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signupUser: (email, password) => dispatch(actions.signupUser(email, password))
    }
}
const mapStateToProps = state =>{
return{
    saving: state.SignupLoginReducer.saving,
    firebaseError: state.SignupLoginReducer.firebaseError,
    userId: state.SignupLoginReducer.userId
}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)

import React, { Component } from 'react'
import css from './Login.module.css'
import Button from '../../components/General/Button/Button'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/LoginActions'
import Spinner from '../../components/General/Spinner/Spinner'
import { Redirect } from 'react-router-dom';
class LoginPage extends Component {
    state={
        email: '',
        password: ''
    }
    changeEmail=(e)=>{
        this.setState({email: e.target.value})
    }
    changePassword=(e)=>{
        this.setState({password: e.target.value})
    }
    login =()=>{
        this.props.login(this.state.email, this.state.password)
    }
    render() {
        return (
            <div className={css.Login}>
                {this.props.userId && <Redirect to='/orders'/>}
                <input onChange={this.changeEmail} type="text" placeholder='Email'/>
                <input onChange={this.changePassword} type="text" placeholder='Password'/>
                {this.props.logginIn && <Spinner/>}
                {this.props.firebaseError && <div style={{color: "red"}}>{this.props.firebaseError }</div>}
                <Button text="Login"  btnType="Success" clicked={this.login}/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        logginIn: state.SignupLoginReducer.logginIn,
        firebaseError: state.SignupLoginReducer.firebaseError,
        userId: state.SignupLoginReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(LoginPage)

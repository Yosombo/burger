import React, { Component } from 'react'
import css from './ContactData.module.css'
import Button from '../General/Button/Button'
import Spinner from '../General/Spinner/Spinner';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/OrderActions';
class ContactData extends Component {
    state ={
        name: null,
        city: null,
        street: null,
    }

    changeName= (e)=>{
        this.setState({name: e.target.value})
    }
    changeStreet= (e)=>{
        this.setState({street: e.target.value})
    }
    changeCity= (e)=>{
        this.setState({city: e.target.value})
    }

    saveOrder = ()=>{
    const order ={
      userId: this.props.userId,
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street
      },
    }

    this.props.saveOrderAction(order)

    }
    componentDidUpdate(){
        if(this.props.newOrderStatus.finished && !this.props.newOrderStatus.error){
            this.props.history.replace('/orders')
        }
    }

    render() {
    
        return (
            <div className={css.ContactData}>
                {this.props.newOrderStatus.saving ? <Spinner/> : (<div>
                <input onChange={this.changeName} type="text" name='name' placeholder='Name'/>
               <input onChange={this.changeStreet} type="text" name='street' placeholder='Street'/>
               <input onChange={this.changeCity} type="text" name='city' placeholder='City'/>
               <Button text="SUBMIT" btnType="Success" clicked={this.saveOrder}/>
                </div>)}      
            </div>
        )
    }
}

const mapStateToProps = state => {
return{
    totalPrice: state.BurgerReducer.totalPrice,
    ingredients: state.BurgerReducer.ingredients,
    newOrderStatus: state.OrderReducer.newOrder,
    userId: state.SignupLoginReducer.userId
}
}
const mapDispatchToProps = dispatch =>{
    return{
        saveOrderAction: (newOrder)=> dispatch(actions.saveOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactData))

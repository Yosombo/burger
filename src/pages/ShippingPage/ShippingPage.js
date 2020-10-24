import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import Button from '../../components/General/Button/Button';
import css from './ShippingPage.module.css'
import { Route } from 'react-router-dom';
import ContactData from "../../components/ContactData/ContactData"
import { connect } from 'react-redux';

class ShippingPage extends Component {


cancelOrder =()=>{
    this.props.history.goBack()
}

showContactData=()=>{
    this.props.history.replace('/ship/contact')
}

    render() {
        return (
            <div className={css.ShippingPage}>
                <h3>Your Order</h3>
                <h3>${this.props.price}</h3>
                <Burger/>
                <Button clicked={this.cancelOrder} btnType="Danger" text="CANCEL ORDER"/>
                <Button clicked={this.showContactData} btnType="Success" text="ENTER YOUR DELIVERY ADDRESS"/>
                <Route path="/ship/contact">
                    <ContactData/>
                </Route>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        price: state.BurgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage)

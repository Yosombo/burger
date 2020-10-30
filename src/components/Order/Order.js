import React from 'react'
import css from './Order.module.css'
import CurrencyFormat from 'react-currency-format';
function Order(props) {
 
    return (
        <div className={css.Order}>
    <p>Address : {props.order.address.name} | {props.order.address.city} | {props.order.address.street}</p>
    <p>Ingredient:<br></br>
         bacon : {props.order.ingredients.bacon}, meat : {props.order.ingredients.meat}, salad : {props.order.ingredients.salad}, cheese : {props.order.ingredients.cheese} </p>
            <p>Total price: <strong>{<CurrencyFormat decimalScale={2} value={props.order.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}</strong></p>
        </div>
    )
}

export default Order

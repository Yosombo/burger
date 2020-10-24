import React from "react";
import { connect } from 'react-redux';
import Button from "../General/Button/Button";
import css from "./OrderSummery.module.css";


function OrderSummery(props) {
  return (
    <div className={css.OrderSummery}>
      <h3>Your order</h3>
      <p>Ingredients</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
        <p><strong>Total price : ${props.price}</strong></p>
      <p>Do you want to continue?</p>
      <Button clicked={props.onCancel} btnType="Danger" text={`Cancel`}/>
      <Button clicked={props.onContinue} btnType="Success" text={`Continue`}/>
    </div>
  );
}
const mapStateToProps = state =>{
  return{
    ingredientNames: state.BurgerReducer.ingredientNames,
    ingredients: state.BurgerReducer.ingredients,
    price: state.BurgerReducer.totalPrice
  }
}

export default connect(mapStateToProps)(OrderSummery);

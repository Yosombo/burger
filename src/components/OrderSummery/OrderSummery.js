import React, {useContext} from "react";
import Button from "../General/Button/Button";
import css from "./OrderSummery.module.css";
import BurgerContext from '../../Context/BurgerContext'


function OrderSummery(props) {
  const burgerCtx = useContext(BurgerContext);

  return (
    <div className={css.OrderSummery}>
      <h3>Your order</h3>
      <p>Ingredients</p>
      <ul>
        {Object.keys(burgerCtx.burger.ingredients).map((el) => (
          <li key={el}>
            {burgerCtx.burger.ingredientNames[el]} : {burgerCtx.burger.ingredients[el]}
          </li>
        ))}
      </ul>
        <hr></hr>
        <p><strong>Total price : ${burgerCtx.burger.totalPrice}</strong></p>
      <p>Do you want to continue?</p>
      <Button clicked={props.onCancel} btnType="Danger" text={`Cancel`}/>
      <Button clicked={props.onContinue} btnType="Success" text={`Continue`}/>
    </div>
  );
}


export default (OrderSummery);

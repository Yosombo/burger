import React, {useContext} from "react";
import Button from "../General/Button/Button";
import css from "./OrderSummery.module.css";
import CurrencyFormat from 'react-currency-format';
import BurgerContext from '../../Context/BurgerContext'


function OrderSummery(props) {
  const burgerCtx = useContext(BurgerContext);

  return (
    <div className={css.OrderSummery}>
      <p className={css.Title}>Your order</p>
      <p>Ingredients</p>
      <ul>
        {Object.keys(burgerCtx.burger.ingredients).map((el) => (
          <li key={el}>
            {burgerCtx.burger.ingredientNames[el]}<span className={css.Number}> : {burgerCtx.burger.ingredients[el]}</span>
          </li>
        ))}
      </ul>
        <div className={css.Line}></div>
        <p><strong>Total price : {<CurrencyFormat decimalScale={2} value={burgerCtx.burger.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}</strong></p>
      <p className={css.Question}>Do you want to continue?</p>
      <Button clicked={props.onCancel} btnType="Danger" text={`Cancel`}/>
      <Button clicked={props.onContinue} btnType="Success" text={`Continue`}/>
    </div>
  );
}


export default (OrderSummery);

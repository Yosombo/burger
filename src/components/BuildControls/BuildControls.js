import React, {useContext}from "react";
import css from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
import BurgerContext from '../../Context/BurgerContext'
import CurrencyFormat from 'react-currency-format';

function BuildControls(props) {
  const burgerCtx = useContext(BurgerContext);

  const disabledIngerdients = {...burgerCtx.burger.ingredients};

  for (let key in disabledIngerdients) {
    disabledIngerdients[key] = disabledIngerdients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Total price: <strong>{<CurrencyFormat decimalScale={2} value={burgerCtx.burger.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>}</strong>
      </p>
      {Object.keys(burgerCtx.burger.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngerdients}
          type={el}
          orts={burgerCtx.burger.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={!burgerCtx.burger.purchasing}
      >
        Order
      </button>
    </div>
  );
}
export default BuildControls;
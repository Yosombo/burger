import React, {useContext}from "react";
import css from "./BuildControl.module.css";
import BurgerContext from '../../Context/BurgerContext'

function BuildControl(props) {
  const burgerCtx = useContext(BurgerContext);
  
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button onClick={() => burgerCtx.addIngredient(props.type)} className={css.More}>
        Add
      </button>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => burgerCtx.removeIngredient(props.type)}
        className={css.Less}
      >
        Remove
      </button>
    </div>
  );
}




export default BuildControl;

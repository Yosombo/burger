import React from "react";
import css from "./BuildControls.module.css";
import BuildControl from "../BuildControl/BuildControl";
import * as actions from '../../redux/actions/BurgerActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function BuildControls(props) {
  const disabledIngerdients = { ...props.burgeriinOrts };

  for (let key in disabledIngerdients) {
    disabledIngerdients[key] = disabledIngerdients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Total price: <strong>{props.price}</strong>
      </p>
      {/* orts ni = text  */}
      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={disabledIngerdients}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={!props.purchasing}
      >
        Order
      </button>
    </div>
  );
}
const mapStateToProps = state =>{
  return{
    burgeriinOrts: state.BurgerReducer.ingredients,
    price: state.BurgerReducer.totalPrice,
    purchasing: state.BurgerReducer.purchasing,
    ingredientNames: state.BurgerReducer.ingredientNames
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    ortsNemeh: ortsNer => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: ortsNer => dispatch(actions.removeIngredient(ortsNer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuildControls)) ;

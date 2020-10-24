import React from "react";
import css from "./Burger.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
function Burger(props) {
  // Object.entries gdg function-r props.orts-iig(object) array bolgoh
  let items = Object.entries(props.orts);

  let content = [];

  //   items array-g map-aar items-iin el bolgonii huwid 1r index buyu (ugugdsun toogoor) ni content array-luu push hiine. Content array.luu push hiihdee props.type-ruu ni el[0] buyu ortsnii neriig hargalzuulan hiij ugnu
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient  key={`${el[0]} ${i}`} type={el[0]} />);
    }
  });

  if (content.length === 0) content = <p>Build your burger</p>;

  return (
    
    <div className={css.Burger}>
      {/* burger gedeg eh component.ees Type gej uusgej uguud tuuniigee propsoor damjuulna */}
      <BurgerIngredient type="breadTop" />
      {content}
      <BurgerIngredient type="breadBottom" />
    </div>
  );
}
const mapStateToProps = state =>{
  return{
    orts: state.BurgerReducer.ingredients,
  }
}

export default connect(mapStateToProps)(withRouter(Burger));

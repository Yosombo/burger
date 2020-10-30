import React, { useContext } from "react";
import css from "./Burger.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import BurgerContext from '../../Context/BurgerContext'
function Burger(props) {
 const burgerCtx = useContext(BurgerContext);

  const items = Object.entries(burgerCtx.burger.ingredients);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient  key={`${el[0]} ${i}`} type={el[0]} />);
    }
  });

  if (content.length === 0) content = <p>Build your burger</p>;

  return (
    
    <div className={css.Burger}>
<div className={css.SaladNumber}>{burgerCtx.burger.ingredients.salad > 0 ? burgerCtx.burger.ingredients.salad : null}</div>
<div className={css.CheeseNumber}>{burgerCtx.burger.ingredients.cheese > 0 ? burgerCtx.burger.ingredients.cheese: null}</div>
<div className={css.MeatNumber}>{burgerCtx.burger.ingredients.meat > 0 ? burgerCtx.burger.ingredients.meat: null}</div>
<div className={css.BaconNumber}>{burgerCtx.burger.ingredients.bacon > 0 ? burgerCtx.burger.ingredients.bacon: null}</div>
    <BurgerIngredient type="breadTop" />
      {content}
      <BurgerIngredient type="breadBottom" />
     
    </div>
  );
}


export default Burger;

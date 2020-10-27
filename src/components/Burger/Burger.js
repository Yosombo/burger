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
      {/* burger gedeg eh component.ees Type gej uusgej uguud tuuniigee propsoor damjuulna */}
      
      <BurgerIngredient type="breadTop" />
      {content}
      <BurgerIngredient type="breadBottom" />
      
    </div>
  );
}


export default Burger;

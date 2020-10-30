import React from "react";
import css from "./BurgerIngredient.module.css";
import AOS from "aos";
import meatImg from '../../assets/images/meat.png'
import cheeseImg from '../../assets/images/cheese.png'
import saladImg from '../../assets/images/salad.png'
import baconImg from '../../assets/images/bacon.png'
import breadTopImg from '../../assets/images/breadTop.png'
import breadBottomImg from '../../assets/images/breadBottom.png'
import "aos/dist/aos.css";
AOS.init();
function BurgerIngredient(props) {
  /* burger gedeg eh component.ees Props.type-aar damjuulsan ugugduliig nuhtsul shalgan tohiroh className-tei div--g butsaana*/

  if (props.type === "breadTop")
    return (
      <div data-aos="fade-down">
        <img className={css.BreadTop} src={breadTopImg} alt="meat"/>
       </div>
    );
  if (props.type === "salad")
    return (
    <div data-aos="flip-right"> 
     <img className={css.Salad} src={saladImg} alt="meat"/>
    </div>
    )
     
  if (props.type === "cheese")
    return <div data-aos="flip-right">
      <img className={css.Cheese} src={cheeseImg} alt="meat"/>
    </div>;
  if (props.type === "meat")
    return <div data-aos="flip-left" >
      <img className={css.Meat} src={meatImg} alt="meat"/>
    </div>;
  if (props.type === "bacon")
    return <div data-aos="flip-left">
       <img className={css.Bacon} src={baconImg} alt="meat"/>
    </div>;

  if (props.type === "breadBottom")
    return(
      <div data-aos="fade-up">
          <img className={css.BreadBottom} src={breadBottomImg} alt="meat"/>
      </div>
    );
  return <div>...</div>;
}

export default BurgerIngredient;

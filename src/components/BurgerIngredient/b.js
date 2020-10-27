// import React from "react";
// import css from "./BurgerIngredient.module.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();
// function BurgerIngredient(props) {
//   /* burger gedeg eh component.ees Props.type-aar damjuulsan ugugduliig nuhtsul shalgan tohiroh className-tei div--g butsaana*/

//   if (props.type === "breadTop")
//     return (
//       <div data-aos="fade-down" className={css.BreadTop}>
//         <div className={css.Seed}></div>
//         <div className={`${css.Seed} ${css.First}`}></div>
//         <div className={`${css.Seed} ${css.Second}`}></div>
//         <div className={`${css.Seed} ${css.Third}`}></div>
//         <div className={`${css.Seed} ${css.Fourth}`}></div>
//       </div>
//     );
//   if (props.type === "salad")
//     return <div data-aos="fade-right" className={css.Salad}></div>;
//   if (props.type === "cheese")
//     return <div data-aos="fade-right" className={css.Cheese}></div>;
//   if (props.type === "meat")
//     return <div data-aos="fade-left" className={css.Meat}></div>;
//   if (props.type === "bacon")
//     return <div data-aos="fade-left" className={css.Bacon}></div>;

//   if (props.type === "breadBottom")
//     return <div data-aos="fade-up" className={css.BreadBottom}></div>;
//   return <div>...</div>;
// }

// export default BurgerIngredient;

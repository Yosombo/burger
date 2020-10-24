import React from "react";
import css from "./BuildControl.module.css";
function BuildControl(props) {
  return (
    <div className={css.BuildControl}>
      {/* props.orts ni = text  */}
      <div className={css.Label}>{props.orts}</div>

      {/* onClick deer unanimous callback funtion duudaj daragdah uyed l duudagdana */}
      {/* props.type ni BurgerBuilder.luu type.aa damjuulna */}
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
        Add
      </button>
      <button
        disabled={props.disabled[props.type]}
        onClick={() => props.ortsHasah(props.type)}
        className={css.Less}
      >
        Remove
      </button>
    </div>
  );
}

export default BuildControl;

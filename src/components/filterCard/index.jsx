import React from "react";
import css from "./_filterCard.module.scss";

const FilterCard  = (props) => {
  return <div   className={css.filterCard}>
    &nbsp;&nbsp;{props.text}&nbsp;&nbsp;
  </div>;
};

export default FilterCard;

import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "..//ButtonComponents/OperatorButtons/Operators";
import Specials from "..//ButtonComponents/SpecialButtons/Specials";

const Display = props => {
  return <div className="display">{props.displayValue}</div>;
};

export default Display;

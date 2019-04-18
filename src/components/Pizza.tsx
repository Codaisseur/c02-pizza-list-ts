import React from "react";
import { IPizza } from "../entities";
import { connect } from "react-redux";
import { selectPizza, TSelectPizzaActionCreator } from "../actions/select-pizza";

export interface IPizzaProps {
  pizza: IPizza;
  selectPizza: TSelectPizzaActionCreator;
}

function Pizza({ pizza, selectPizza }: IPizzaProps) {
  return (
    <li onClick={() => selectPizza({ id: pizza.id })}>
      {pizza.name}
    </li>
  );
}

const mapDispatchToProps = { selectPizza };

export default connect(null, mapDispatchToProps)(Pizza);

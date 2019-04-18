import React from "react";
import { connect } from "react-redux";
import { IPizza } from "../entities";
import { IStore } from "../store";
import PizzaDetails from "./PizzaDetails";

export interface IPizzaDetailsContainerProps {
  pizza?: IPizza;
}

export class PizzaDetailsContainer extends React.Component<
  IPizzaDetailsContainerProps
> {
  render() {
    const { pizza } = this.props;
    if (!pizza) {
      return null;
    }

    return <PizzaDetails pizza={pizza} />;
  }
}

// Select 1 pizza from the pizzas state, by looking at the selectedPizza state
const mapStateToProps = (state: IStore) => {
  const { pizzas, selectedPizza } = state;

  if (selectedPizza === null) {
    return {};
  }

  return {
    pizza: pizzas.find(pizza => pizza.id === selectedPizza.id)
  };
};

export default connect(mapStateToProps)(PizzaDetailsContainer);

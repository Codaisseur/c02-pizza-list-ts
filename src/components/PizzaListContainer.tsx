import React from "react";
import PizzaList from "./PizzaList";
import { connect } from "react-redux";
import { IPizza } from "../entities";
import { IStore } from "../store";

export interface IPizzaListContainerProps {
  pizzas: IPizza[];
}

class PizzaListContainer extends React.Component<IPizzaListContainerProps> {
  selectPizza(id: number) {
    console.log("selected pizza:", id);
  }

  render() {
    return (
      <PizzaList pizzas={this.props.pizzas} />
    );
  }
}

const mapStateToProps = (state: IStore): IPizzaListContainerProps => ({
  pizzas: state.pizzas
});

export default connect(mapStateToProps)(PizzaListContainer);

import React from "react";
import { IPizza } from "../entities";
import Pizza from "./Pizza";

export interface IPizzaListProps {
  pizzas: IPizza[];
}

export default function PizzaList(props: IPizzaListProps) {
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <ul>
        {props.pizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

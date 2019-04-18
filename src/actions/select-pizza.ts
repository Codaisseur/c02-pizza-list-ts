// src/actions/select-pizza.ts
import { IPizzaWhereUniqueInput } from "../entities";
import { ISelectPizzaAction } from "./pizzas";

export type TSelectPizzaActionCreator = (
  selector: IPizzaWhereUniqueInput
) => ISelectPizzaAction;

export const selectPizza: TSelectPizzaActionCreator = selector => ({
  type: "SELECT_PIZZA",
  payload: selector
});

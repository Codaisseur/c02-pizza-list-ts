import { IAction } from ".";
import { IPizzaWhereUniqueInput } from "../entities";

type TSelectPizza = "SELECT_PIZZA";

// Export all possible pizza action types
export type TPizzaActionType = TSelectPizza;

export interface ISelectPizzaAction
  extends IAction<TSelectPizza, IPizzaWhereUniqueInput> {
  payload: IPizzaWhereUniqueInput;
}

// Export all possible pizza actions
export type IPizzaAction = ISelectPizzaAction;

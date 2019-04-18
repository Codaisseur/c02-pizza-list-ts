import { IStore } from "../store";
import { ISelectPizzaAction } from "../actions/pizzas";

const reducer = (
  state: IStore["selectedPizza"] = null,
  action: ISelectPizzaAction
) => {
  switch (action.type) {
    case "SELECT_PIZZA":
      return action.payload;

    default:
      return state;
  }
};

export default reducer;

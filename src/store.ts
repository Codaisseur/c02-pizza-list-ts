import { compose, createStore } from "redux";
import reducer from "./reducers";
import { IPizza, IPizzaWhereUniqueInput } from "./entities";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
   : compose;

const store = createStore(reducer, enhancer);

export interface IStore {
  pizzas: IPizza[];
  selectedPizza: IPizzaWhereUniqueInput | null;
}

export default store;

export interface IAction<T = string, P = {}> {
  type: T;
  payload?: P;
}

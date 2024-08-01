import { createStore } from "redux";
import { reducerCounter } from "./reducer";
//1-create Store
export const storeCounter = createStore(reducerCounter);

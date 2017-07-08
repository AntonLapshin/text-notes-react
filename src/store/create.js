import { createStore } from "redux";
import reducer from "../reducers";

export default preloadedState => createStore(reducer, preloadedState);

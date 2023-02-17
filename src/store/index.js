import thunk from "redux-thunk";
import basketReducer from "./basket/basketReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: mealsReducer } = require("./meals/mealsReducer");

const rootReducer = combineReducers({
  meals: mealsReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

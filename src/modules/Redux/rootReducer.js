import { combineReducers } from "redux";
import { productReducer } from './product.reducer'
let rootReducer = combineReducers({ product: productReducer });
export { rootReducer };

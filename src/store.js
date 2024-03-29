import { createStore, compose } from "redux";
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



 const Store = createStore(rootReducer, composeEnhancers());


 export default Store;
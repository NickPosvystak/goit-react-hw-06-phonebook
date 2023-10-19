import { devToolsEnhancer } from "@redux-devtools/extension";

const { combineReducers, createStore } = require("redux");
const { contactsDetailsReducer } = require("./contactsDetailsReducer");




const rootReducer = combineReducers({
  contactsDetails: contactsDetailsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer)


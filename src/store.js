import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { reducer as rootReducer } from "./reducer";


const middleware = [];
const enhancers = [];

if (import.meta.env.DEV) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(rootReducer, composedEnhancers);


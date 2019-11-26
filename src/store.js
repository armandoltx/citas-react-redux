import { createStore } from 'redux';

// Definir el state inicial, que vendria siendo el arbol de todo el state
const initialState =[];

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
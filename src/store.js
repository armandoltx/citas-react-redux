import { createStore } from 'redux';
import reducer from './reducers'; // solo la carpeta pq lo nombramos index.js
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

// Definir el state inicial, que vendria siendo el arbol de todo el state
// const initialState =[];

// El store es un excelente lugar para poner el localStorage pq el store se actualiza cada vez q el state cambie
// como inicial state vamos a mponer el storageState para obtener las citas de localstorage
const storageState = obtenerStateStorage();

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// para agregar los cambios del state al storage
store.subscribe( () => {
  // console.log('cambios');
  // console.log("state ", store.getState());
  guardarStateStorage({
    citas: store.getState().citas // solo queremos el state de citas

    // getState y subscribe son funciones propias del store
  })
})

export default store;
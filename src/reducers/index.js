import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import validacionReducer from './validacionReducer';

export default combineReducers({
  // definimos el state y como vamos a acceder a el en tus componentes.
  citas: citasReducer,
  error: validacionReducer
});
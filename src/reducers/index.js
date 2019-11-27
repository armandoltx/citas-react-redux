import { combineReducers } from 'redux';
import citasReducer from './citasReducer';

export default combineReducers({
  citas: citasReducer // definimos el state y como vamos a acceder a el en tus componentes.
});
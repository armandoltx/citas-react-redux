// Usualmente cada reducer tiene su propio state
const initialState = {
  citas: []
}

// ha esta funcion se le pasa el state, que por default sera el initialState
// y la action va a contener diferente informacion sera un objeto, la accion q se esta realizando (el type) y el payload
// el payload que son los datos que estas enviando a esta accion
export default function(state= initialState, action) {
  switch(action.type) {
    case 'AGREGAR_CITA':
      return {
        ...state,
        citas: [...state.citas, action.payload] // action.payload es la cita nueva
      }

    case 'BORRAR_CITA':
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
        // con filter queremos retornar las citas que no sean las del payload, q esa es la q queremos borrar
      }


    default:
      return state;
  }
}
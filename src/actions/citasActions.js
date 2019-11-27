export const agregarCitaAction = (cita) => {  // cita es lo q espera el payload en el reducer
  return {
    type: 'AGREGAR_CITA',  // esto es igual para mapear el reducer o la parte del reducer con la acion
    payload: cita // esta cita la mandamos pasar desde AgregarCita "submitNuevaCita" de esta forma
    // los datos que pasamos del formulario pasan a esta accion y de esta accion al reducer, los agrega al state y actualiza el state
  }
}

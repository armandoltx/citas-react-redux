export const obtenerStateStorage = () => {
  const citasStorage = localStorage.getItem('citas');
  if(citasStorage === null) return undefined;

return JSON.parse(citasStorage); // para convertir nuestro storage en un objeto de JavaScript

}

export const guardarStateStorage = (state) => {
  // agregamos el state al localstorage
  const citasState = JSON.stringify(state) // para convertir un objeto a sring
  localStorage.setItem('citas', citasState);
}
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // es lo q nos permite ejecutar las acciones y los reducers, es lo q los va a mandar llamar. Es con el dispatch donde se decide en q momento se comunican las acciones y los reducers.
import { agregarCitaAction } from '../actions/citasActions';
import uuid from 'uuid/v4';

const AgregarCita = () => {

  // State del componente o local
  const [ mascota, guardarMascota ] = useState('');
  const [ propietario, guardarPropietario ] = useState('');
  const [ fecha, guardarFecha ] = useState('');
  const [ hora, guardarHora ] = useState('');
  const [ sintomas, guardarSintomas ] = useState('');

  // Dispatch para ejecutar nuestras acciones
  // es lo q nos permite ejecutar las acciones y los reducers,
  // es lo q los va a mandar llamar.
  // Es con el dispatch donde se decide en q momento se comunican las acciones y los reducers.
  const dispatch = useDispatch();
  const agregarNuevaCita = (cita) => dispatch(agregarCitaAction(cita))


  //Cuando el formulario es enviado
  const submitNuevaCita = e => {
    // prevetn default
    e.preventDefault();

    // Validar el formulario

    // Crear nueva Cita y almacenar en el state
    //===
    // Para ello hay q agregar una nueva accion en la carpeta "actions"
    // hay q tener en cuenta que las acciones y los reducer estan muy relacionados.
    // en el reducer tenemos un => case 'AGREGAR_CITA' la accion q realiza (action.payload) viene de citasActions
    // tienen q tener 'AGREGAR_CITA' tb para unirse
    // una vez creada la cita, se llama a la accion y esta llama al reducer
    // el payload de agregarCitaAction va a ser la nueva cita (action.payload)
    // lo mismo q poner mascota : mascota,
    agregarNuevaCita({
      id: uuid(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    });

    // Reiniciar el formulario
  }

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
        <form onSubmit={submitNuevaCita}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                value={mascota}
                onChange={ e => guardarMascota(e.target.value) }
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                value={propietario}
                onChange={ e => guardarPropietario(e.target.value) }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input
                type="date"
                className="form-control"
                value={fecha}
                onChange={ e => guardarFecha(e.target.value) }
              />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input
                type="time"
                className="form-control"
                value={hora}
                onChange={ e => guardarHora(e.target.value) }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
            <div className="col-sm-8 col-lg-10">
              <textarea
                className="form-control"
                value={sintomas}
                onChange={e => guardarSintomas(e.target.value) }
              ></textarea>
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">Agregar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarCita;
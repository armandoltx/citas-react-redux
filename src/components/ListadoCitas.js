import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citasActions';

const ListadoCitas = () => {

  // Obtener las citas del State
  const citas = useSelector((state) => state.citas)
  // console.log(citas);

  // Mensaje Condicional de las citas
  const mensaje = Object.keys(citas.citas).length === 0 ? "No Hay Citas" : "Administra las Citas Aqui"

  // Dispatch para mandar llamar la accion de eliminar
  const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {citas.citas.map(cita => (
            <div key={cita.id} className="media mt-3">
              <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text"><span>Nombe Dueno:</span> {cita.propietario}</p>
                <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
                <p className="card-text"><span>Hora:</span> {cita.hora}</p>
                <p className="card-text"><span>Sintomas:</span> <br />{cita.sintomas}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(borrarCitaAction(cita.id))}
                >Borrar &times;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListadoCitas;
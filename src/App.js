import React from 'react';
import AgregarCita from './components/AgregarCita';
// REDUX  se importa el store en el app para que el STATE y todas las ACCIONES esten disponible dentro de todos los componenetes de la aplicacion.
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    // Argegamos el provider q agrupa toda la app y le decimos que store vamos a utilizar ahora el store estara disponible en todos los componentes q pasemos por aqui
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de Pacientes de veterinaria</h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCita />
          </div>
          <div className="col-md-6">Listado Aqui</div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const URL = 'https://reqres.in/api/users?page=2';

  const [usuarios, setUsuarios] = useState([]);

  const usuariosUsuariosLocal = [
    {
      id: 1,
      email: 'juan.peres@reqres.in',
      first_name: 'Juan',
      last_name: 'Perez',
    },
    {
      id: 2,
      email: 'esteban.gomez@reqres.in',
      first_name: 'Esteban',
      last_name: 'Gomez',
    },
    {
      id: 3,
      email: 'santiago.lopez@reqres.in',
      first_name: 'Santiago',
      last_name: 'Lopez',
    },
  ];

  const cargarUsuariosPromise = () => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then(({ data }) => {
        setUsuarios(data);
      });
  };

  const cargarUsuariosAsynAwait = async () => {
    const respuesta = await fetch(URL);
    const { data } = await respuesta.json();
    setUsuarios(data);
  };

  useEffect(() => {
    cargarUsuariosAsynAwait();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Api Rest Profile</h3>
        <ul>
          {usuarios.map(
            ({ id, first_name, last_name, avatar }) => (
              <li key={id}>
                <img src={avatar} alt={first_name} />
                {first_name} {last_name}
              </li>
            )
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;

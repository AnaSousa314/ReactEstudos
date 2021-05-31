import React, {useState} from 'react';
import Classe from './components/Classe'

//Pode misturar componente de Classe com componente de Funcional
function App() {
  return (
    <>
      <h1>Componentes de Classe</h1>
      <Classe canal="CFB Cursos" curso="Curso de React"/>
    </>
  );
}

export default App;

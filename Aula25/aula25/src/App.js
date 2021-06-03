import React, {useState} from 'react';
import Carro from './components/Carro'

//Pode misturar componente de Classe com componente de Funcional
function App() {

  const [carro,setCarro]=useState(true)
  const mostrarOcultarCarro=()=>{
    setCarro(!carro)
  }
  return (
    <>
      <h1>Componentes de Classe</h1>
      {carro ? <Carro fator={10}/> : ''} 

      {/* para chamar componentWillUnmount */}
      <button onClick={()=>mostrarOcultarCarro()}>
          Ocultar
        </button>
    </>
  );
}

export default App;

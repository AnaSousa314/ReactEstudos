import React, {useState} from 'react';
import Carro from './components/Carro'

//Pode misturar componente de Classe com componente de Funcional
function App() {
  return (
    <>
      <h1>Componentes de Classe</h1>
      <Carro fator={10}/> {/* o fator vai aumentar de 10 na função da classe Carro, podemos colocar outro valor */}
    </>
  );
}

export default App;

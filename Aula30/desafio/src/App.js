import React, {useState} from "react";
import {Tabela,Altura,Peso,Resultado,Calcular} from './components'

export default function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado] = useState(0)
  
  return (
    <>
      <Peso peso={peso} setPeso={setPeso}/>
      <Altura altura={altura} setAltura={setAltura}/>
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <Resultado resultado={resultado} setResultado={setResultado}/>
      <br />
      <Tabela />
    </>
  );
}



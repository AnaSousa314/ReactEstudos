import React, {useState} from "react";

const tabelaIMC=()=>{
  return(
    <table border="1" style={{borderCollapse:"collapse"}}>
      <thead>
        <tr>
          <th>
            Classificação
          </th>
          <th>
            IMC
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do Peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau I</td>
          <td>Entre 30 e 34,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau II</td>
          <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
          <td>Obesidade Grau III ou Mórbida</td>
          <td>Acima de 40</td>
        </tr>
      </tbody>
    </table>
  )
}

const fpeso=(p,sp)=>{
  /* OBS.: o state vai no value e a função do state no onChange */
  return(
    <div>
      <label>
        Peso
        <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}/>
      </label>
    </div>
  )
}

const faltura=(a,sa)=>{
  return(
    <div>
      <label>
        Altura
        <input type="text" value={a} onChange={(e)=>{sa(e.target.value)}}/>
      </label>
    </div>
  )
}

const fcalcular=(p,a,sr)=>{
  const calc=()=>{
    sr(p/(a*a)); 
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fresultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r.toFixed(2)}</p>
    </div>
  )
}

export default function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado] = useState(0)
  
  return (
    <>
      {fpeso(peso,setPeso)}
      {faltura(altura,setAltura)}
      {fresultado(resultado,setResultado)}
      {fcalcular(peso,altura,setResultado)}
      {tabelaIMC()}
  
    </>
  );
}



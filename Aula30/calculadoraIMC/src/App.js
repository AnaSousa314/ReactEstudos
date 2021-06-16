
import { useState } from 'react';
import './App.css'

function App() {
  const [peso,setPeso] = useState(0);
  const [altura,setAltura] = useState(0);
  let result = 0;

  
  const calculadora =(p,a)=>{
    result = parseFloat(p)/(parseFloat(a) * parseFloat(a));

    let teste = document.querySelector('.resultado');
    teste.innerHTML = `Seu IMC é de: ${result.toFixed("2")}`

      console.log(result.toFixed("2"))

  }

  return (
    <div className="calcIMC">
      <label htmlFor="peso">
        Informe seu peso
      </label>
      
      <br />
      
      <input type="number" step="0.01" name="peso" id="peso" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
      
      <br />
      <br />
      
      <label htmlFor="altura">
        Informe sua altura
      </label>

      <br />

      <input type="number" name="altura" step="0.01" id="altura" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>

      <br /><br />

      <button onClick={()=>{calculadora(peso,altura)}}>CALCULAR</button>

      <div>
        <h2 className="resultado">
          
        </h2>
      </div>
    </div>
  );
}

export default App;

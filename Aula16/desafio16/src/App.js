import {useState} from 'react';
import Nota from './components/Nota'
import Resultado from './components/Resultado'

function App() {

  const [notas,setNotas]=useState({"nota1": 0,"nota2": 0,"nota3": 0,"nota4": 0 });

  const handleSetNotas=(e)=>{
    if (e.target.getAttribute('name')==1) {
      setNotas({"nota1": e.target.value,"nota2": notas.nota2,"nota3": notas.nota3,"nota4": notas.nota4 })

      //console.log(e.target.value)
    }else if(e.target.getAttribute('name')==2) {
      setNotas({"nota1": notas.nota1,"nota2": e.target.value,"nota3": notas.nota3,"nota4": notas.nota4 })

      console.log(e.target.value)
    }else if(e.target.getAttribute('name')==3) {
      setNotas({"nota1": notas.nota1,"nota2": notas.nota2,"nota3": e.target.value,"nota4": notas.nota4 })

      console.log(e.target.value)
    }else if(e.target.getAttribute('name')==4) {
      setNotas({"nota1": notas.nota1,"nota2": notas.nota2,"nota3": notas.nota3,"nota4": e.target.value })

      console.log(e.target.value)
    }
  }  
  return (
    <>
      <Nota num={1} nota={notas.nota1} setNota={handleSetNotas}/>
      <Nota num={2} nota={notas.nota2} setNota={handleSetNotas}/>
      <Nota num={3} nota={notas.nota3} setNota={handleSetNotas}/>
      <Nota num={4} nota={notas.nota4} setNota={handleSetNotas}/>
      <Resultado somaNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
    </>
  );
}

export default App;

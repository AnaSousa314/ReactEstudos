import React, { useState } from'react'
;

function App() {

/*   
  // criando chave
  localStorage.setItem("nome","Ana");

  // se o valor da chave já existir, o comando abaixo troca seu valor
  localStorage.setItem("nome","Sousa")

  //recuperar/obter valor chave
  localStorage.getItem("nome");

  //remover chave
  localStorage.removeItem("nome"); */

  const [nome, setNome] = useState();

  const armazenar = (chave, valor)=>{
    localStorage.setItem(chave,valor);
  }

  const consultar=(chave)=>{
    alert(localStorage.getItem(chave))
  }

  const apagar=(chave)=>{
    localStorage.removeItem(chave)
  }

  return (
    <>
      <label >Digite um nome:</label>
      <br />
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />

      <br />
      <button onClick={()=>armazenar('ls_nome',nome)}>Gravar Nome</button>
      <button onClick={()=>consultar('ls_nome')}>Ver Nome</button>
      <button onClick={()=>apagar('ls_nome')}>Remover Nome</button>
    </>
  );
}

export default App;

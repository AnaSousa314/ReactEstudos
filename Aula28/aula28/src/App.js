import React, {useState, useEffect} from 'react';

import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'

function App() {

  const [pagina,setPagina]=useState(0)

  const linksPaginas=(pag)=>{
    if(pag==1){
      window.open('http://localhost:3000?1','_self')
    }else if(pag==2){
      window.open('http://localhost:3000?2','_self')
    }
  }
  const retornarPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return(
      <>
        <button onClick={()=>linksPaginas(1)}>Pagina1</button>
        <button onClick={()=>linksPaginas(2)}>Pagina2</button>
      </>
      )
    }
  }


  useEffect(()=>{
    const url = window.location.href
    const res = url.split('?')

    setPagina(res[1])
    console.log(res);
  })
 
  return (
    <>
      {retornarPagina()}
    </>
  );
}

export default App;

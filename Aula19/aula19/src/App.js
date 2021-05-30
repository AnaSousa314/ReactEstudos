import React,{useEffect,useState} from 'react'
function App() {
  const [contador,setContador] = useState(0);
  
  /* O useEffect é chamado assim que a página é montada, e toda vez que ela é atualizada.
  Quando clicamos no button o state é alterado/atualizado e a página também é atualizada, depois que isso ocorre o useEffect é chamado por causa da atualização da página. Ele só é chamado DEPOIS da página ser atualizada.
  */
  useEffect(()=>{
    console.log('Página carregada')
    document.title = "Contagem: "+contador;

  })
  
  return (
    <>
      <h1>Contagem: {contador} </h1>
      <button onClick={()=>setContador(contador+1)}>Click</button>
    </>
  );
}

export default App;

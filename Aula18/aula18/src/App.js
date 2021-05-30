import React from 'react';
import Caixa from './components/Caixa'
import Canal from './components/Canal'
function App() {
  /* Children é um array que contém os elementos de um componente.
  Pode ser mostrado todos os childrens dessa forma "{props.children}", ou mostrar elementos específicos através do seu índice no array, ex "{props.children[1]}".
  Tudo isso se chama CONTEÇÃO
  */

  /* Os elementos dentro do componente Caixa abaixo, são os childrens/filhos que estão sendo passados para ele. */

  /* Dentro do componente Caixa abaixo, nós temos um "atributo" chamado site que envia um informação através de props para o componente. */
  return (
    <>
      <Caixa site="www.cfbcursos.com.br">
        <h1>CFB - cursos</h1>
        <p>Curso de React</p>
        <strong>Acessado pelo indice do array children</strong>
        <br />

          <Canal>
            <p>
              Mostrando como desestruturar os props no componente Canal
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Canal>
      </Caixa>
     
    </>
  );
}

export default App;

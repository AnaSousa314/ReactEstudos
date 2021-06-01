import React from 'react';

//POO
export default class Classe extends React.Component{
  //Diferente do componente funcional, no componente de classe precisamos colocar o método render()

  //automaticamente ao criar um objeto para essa classe, o construtor será chamado
  //Diferente de outras linguagens em que o construtor tem o nome da classe que ele pertence, no JavaScript ele recebe o nome constructor
  constructor(props){
    //o super chama o construtor da classe pai
    super(props);
  }
  render(){
    return(
      <>
        <h1>Primeiro Componente de Classe</h1>
        <p>Canal: {this.props.canal}</p>
        <p>Curso: {this.props.curso}</p>
      </>
    )
  }
}


//Pode ser em baixo ou em cima
//export default Classe;
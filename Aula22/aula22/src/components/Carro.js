import React from 'react';

export default class Carro extends React.Component{
  constructor(props){
    super(props);
    this.modelo="Golf";
    this.state={
      ligado: false,
      velAtual: 0,
    }
  }

  ligarDesligar(){
    // this.state.ligado=true //muda mas não renderiza na tela. para isso faz o abaixo
    this.setState({ligado:!this.state.ligado})
  }
  render(){
    return(
      <>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? 'SIM':'NÃO'} </p>{/* colocamos essa condicional pq ele não mostra o valor booleano false */}
        <p>Velocidade Atual: {this.state.velAtual}</p>
        <button onClick={()=>this.ligarDesligar()}>
          {this.state.ligado ? 'Desligar Carro':'Ligar Carro'}
        </button>
      </>
    )
  }
}
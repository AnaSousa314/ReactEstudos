import React from 'react';

export default class Carro extends React.Component{
  constructor(props){
    super(props);
    this.modelo="Golf";
    this.state={
      ligado: false,
      velAtual: 0,
    }

    this.ld=this.ligarDesligar.bind(this);
    this.ac=this.acelerar.bind(this);
  }

  ligarDesligar(){

    //this.setState({ligado:!this.state.ligado})//com o bind, essa forma também torna-se segura

    this.setState(
      (state)=>(
        {ligado:!state.ligado}
      )
    )

  }

  acelerar(){
    this.setState(
      (state,props)=>(
        {velAtual:state.velAtual + props.fator}
      )
    )
  }

  render(){
    return(
      <>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? 'SIM':'NÃO'} </p>
        <p>Velocidade Atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>
        {/* com bind onClick={this.ld} */}
          {this.state.ligado ? 'Desligar Carro':'Ligar Carro'}
        </button>

        {/* meu teste de fazer o bind com acelerar também */}
        <button onClick={this.ac}>
          Acelerar
        </button>
      </>
    )
  }
}
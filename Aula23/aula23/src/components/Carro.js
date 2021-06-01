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
    // this.setState({ligado:!this.state.ligado})
    // A forma abaixo é mais segura, pois como no JS as funções são assícronas, ás vezes ocorre da tela não renderizar o state, logo ele não aparece alterado para o usuário. Isso ocorre principalmente em cáculos muito longos
    this.setState(
      (state)=>(//conteúdo da função
        {ligado:!state.ligado}//conteúdo do state
      )
    )

    //com função tradicional
    // this.setState(
    //   function(state){
    //     return(
    //     {ligado:!state.ligado}
    //     )
    //   }
    // )
  }

  acelerar(){
    this.setState(
      (state,props)=>(
        {velAtual:state.velAtual + props.fator}
      )
    )
  }

  //forma menos recomendável
  // acelerar(){
  //   this.setState(
  //       {velAtual:this.state.velAtual + this.props.fator}
  //     )
  // }
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
        <button onClick={()=>this.acelerar()}>
          Acelerar
        </button>
      </>
    )
  }
}
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


  //chamado automáticamente quando o componente é montado. ele faz primeiro o render() e depois o componentDidMount
  componentDidMount(){
    console.log('O carro foi criado')
  }

  //chamado toda vez que o componente é atualizado. também é chamado um vez somente depois do render(). clique em acelerar
  componentDidUpdate(){
    console.log('O carro foi atualizado')
  }

  //quando o componente é retirado do DOM. sempre é exucutado depois do render()
  componentWillUnmount(){
    console.log('O carro foi retirado do DOM')
  }
  render(){
    console.log('render() chamado primeiro')
    return(
      <>
        <h1>Meu Carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? 'SIM':'NÃO'} </p>
        <p>Velocidade Atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>

          {this.state.ligado ? 'Desligar Carro':'Ligar Carro'}
        </button>

        <button onClick={this.ac}>
          Acelerar
        </button>
     
      </>
    )
  }
}
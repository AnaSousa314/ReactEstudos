import React from 'react'

export default class BaseClasse extends React.Component{
  constructor(props){
    //para permitir o uso de props
    super(props)

    //Criação de States
    this.state={
      canal: 'CFB Cursos',
      curso: 'React',
      ativo: true,
      nome: this.props.nomeAluno
    }

    this.status=this.props.status

    //bindagem
     this.ad = this.ativarDesativar.bind(this)

    //Instruções do construtor

  }

  //Função para manipular state
  ativarDesativar(){
    this.setState(
      state=>({
        ativo:!state.ativo
      })
    )
  }

  componentDidMount(){
    console.log('O componente foi criado');
  }

  componentDidUpdate(){
    console.log('O componente foi atualizado');
  }

  componentWillUnmount(){
    console.log('O componente foi removido');
  }


  render(){
    return(
      <>
        <h1>Componente de Classe</h1>

        {/* chamada da função com bind */}

        <button onClick={this.ad}>
          {this.state.ativo 
          ? 'Ativar' : 'Desativar'
          }
        </button>

        <button onClick={()=>this.ativarDesativar()}>Ativar Desativar</button>
      </>
    )
  }



}
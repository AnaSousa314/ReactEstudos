import React from 'react';

export default class CalcularIMC extends React.Component{

  constructor(props){
    super(props);

    this.c=this.calc.bind(this)
  }

  calc(){
    this.props.sr(this.props.p/(this.props.a*this.props.a)); 
  }

  render(){
  return(
    <div>
      <button onClick={this.c}>Calcular</button>{/* ou ()=>{this.calc()} */}
    </div>
  )
  }
  
}
import React from 'react';
export default class Altura extends React.Component{

  constructor(props){
    super(props);
   
  }


  render(){
    return(
      <div>
        <label>
          Altura
          <input type="text" value={this.props.a} onChange={(e)=>{this.props.sa(e.target.value)}}/>
        </label>
      </div>
    )
  }
}
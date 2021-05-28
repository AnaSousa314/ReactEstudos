import React from 'react'

export default function Nota(props){
 // console.log(props.setNota)
  return(
    <div>
      <legend>Informe a nota: {props.num}</legend>
      <input type="text" name={props.num} value={props.nota} onChange={(e)=>props.setNota(e)}/>
    </div>
  )
}
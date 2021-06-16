export const Peso=(props)=>{
  /* OBS.: o state vai no value e a função do state no onChange */
  return(
    <div>
      <label>
        Peso
        <input type="text" value={props.peso} onChange={(e)=>{props.setPeso(e.target.value)}}/>
      </label>
    </div>
  )
}
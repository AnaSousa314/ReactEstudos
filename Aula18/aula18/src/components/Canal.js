import React from 'react'
export default function Canal({children}) {
  /* OBS.: só conseguimos acessar o children pelo indice quando o indice for maior que zero */
  return (
    <>
      {children[0]}
    </>
  );
}

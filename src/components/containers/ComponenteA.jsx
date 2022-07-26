import React from 'react';
import Contact from '../../models/contacto.class';
import ComponenteB from '../pure/ComponenteB';


export default function ComponenteA() {
  const defaultContact=new Contact("Juan Camilo","Paredes Zamora","caamilo9517@gmail",true);
 
  return (
    <div>
        <h1>Your Contact List: </h1>
        <ComponenteB contact={defaultContact}/>
    </div>
  )
}

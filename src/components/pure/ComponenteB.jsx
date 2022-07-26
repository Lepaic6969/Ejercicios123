import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Contact from '../../models/contacto.class';


const ComponenteB = ({contact}) => {
    // console.log(contact);
    const [connected,setConnected]=useState(contact.connected)
    const changeConnected=()=>{
        setConnected(!connected);
    }
    
    return (
        <div>
            <h2>Full Name: {contact.name} {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>{ connected ? "Contacto En Línea":"Contacto No Disponible" }</h4>

        </div>
    );
};


ComponenteB.propTypes = {
    contact:PropTypes.instanceOf(Contact),
};


export default ComponenteB;

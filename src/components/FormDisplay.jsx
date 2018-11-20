import React from 'react';
import {withScriptjs} from "react-google-maps"
import Autocomplete from 'react-google-autocomplete';

const FormDisplay = withScriptjs((props) => {

  return (
    <div className='formDiv'>
      <h1>Busca el tipo de comida o restaurant que deseas</h1>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} type='text' name='place' placeholder='Ingresa el tipo de comida o restaurant aqui'/>
        <Autocomplete
        style={{
        width: '40%',
        paddingLeft: '15px',
        marginTop: '2px'
       }}
       onPlaceSelected={ props.onPlaceSelected }
       types={['address']}
      />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
}
)

export default FormDisplay;

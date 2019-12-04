import React, {Component} from 'react';


// //// Class component que regresa de manera defaul un solo tag
// class PrimerComponent extends Component{
//     //// render es el unico metodo obligatorio que solicita la herencia de Component
//     render(){
//         return (
//             <h1>Hola Mundito</h1>
//         );
//     }
// }

//// Functional component como arrow function
const PrimerComponent = () => {
    return (
        <h1>Hola Mundito</h1>
    );
}

// //// Esta es la forma de crear un functional component de manera literal que es igual de valido y se puede utilizar
// function PrimerComponent() {
//     return (
//         <h1>Hola Mundito</h1>
//     );
// }

export default PrimerComponent;
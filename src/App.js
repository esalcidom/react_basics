import React, {Fragment} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'

function App() {

  const fecha = new Date().getFullYear();

  return (

    <Fragment>
      <Header 
        titulo='Tienda Viertual'
      />
      <Products/>
      <Footer
        fecha={fecha}
      />
    </Fragment>
    ///////// Fragment ayuda a poder envolver todos los elementos que se necesitan regresar sin alterar 
    ///////// el diseño como lo podria alterar un div ya que el return necesita solo regresar un 
    ///////// elemento. Fragment se debe de importar desde react
    // <Fragment>
    // <h1>{empleado.nombre}</h1>
    // <h2>{empleado.trabajo}</h2>
    // </Fragment>
    ///////// Sin JSX
    /////////  React.createElement(
    //   'h1',
    //   {
    //     id: 'heading',
    //     className: 'heading'
    //   },
    //   'Hola Mundo'
    // )
  );
}

export default App;

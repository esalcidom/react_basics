import React, { Component, Fragment } from 'react';
import Product from './Product'

/// class component con state
class Products extends Component {
    state = {
        products : [
            { id: 1, name : 'Camisa ReactJS', price: '10'},
            { id: 2, name : 'Camisa VueJS', price: '20'},
            { id: 3, name : 'Camisa Angular', price: '30'},
            { id: 4, name : 'Camisa Node.js', price: '40'},
        ],
        totalCarrito: 500,
        cliente: 'Juan'
    }

    componentDidMount(){
        //// Component is ready!
        console.log(1);
    }

    componentWillMount(){
        //// Component still not ready
        console.log(2);
    }

    componentWillUpdate(){
        //// Component changed
        console.log(3);
    }

    componentWillUnmount(){
        //// Compnent will disapierd so first execute this
        console.log(4);
    }

    render(){
        //// Render is called first and then the componentDidMount method
        console.log(5);

        const {products} = this.state;
        console.log(products);
        return(
            <Fragment>
                <h1>Lista de Productos</h1>
                {products.map(product => (
                    <Product
                        //Nota: Es necesario agregar una llave en el listado para que react pueda mapear correctamente cada elemento
                        key={product.id} 
                        product={product}
                    />
                ))}
            </Fragment>
        );
    }
}

export default Products;
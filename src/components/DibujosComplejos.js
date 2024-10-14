import React, { Component } from 'react';

class DibujosComplejos extends Component {
    
    dibujarNumeros = () => {
        //Dentro de los metodos si que se utilizan las palabras clave
        let lista = [];

        //A cada elemento dinámico que incluyamos hay que ponerle una clave unica
        for (var i = 1; i<=7;i++){
            var numero = parseInt(Math.random() * 100) +1;
            lista.push(<li key={i}>{numero}</li>)
        }
        return lista;
    }

    render() {
        return (
            <div>
                <h1>Dibujos Complejos</h1>
                <ul>
                    {/* Si pones los parentisis se ejecuta con el render */}
                    {this.dibujarNumeros()}
                </ul>
            </div>
        );
    }
}

export default DibujosComplejos;

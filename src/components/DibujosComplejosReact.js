import React, { Component } from 'react';

class DibujosComplejosReact extends Component {
    state = {
        nombres: ['Lucia', 'Adrian', 'Antonia', 'Diana', 'Sofia', 'Carlos'],
    };

    generarNombre = () => {
        this.state.nombres.push('Nuevo nombre');

        this.setState({
            nombres: this.state.nombres,
        });
    };

    render() {
        return (
            <div>
                <h1>Dibujos Complejos React</h1>
                <button onClick={() => this.generarNombre()}>Generar Nombre</button>
                {
                    //Esto es codigo react, sintaxis JSX, debe contener un return
                    this.state.nombres.map((nombre, index)=>{
                        //Nunca debe estar vacio, siempre de contener un return
                        return(<h1 key={index}>{nombre}</h1>)
                    })
                }
            </div>
        );
    }
}

export default DibujosComplejosReact;

import { Component } from "react";

//Se puende declarar metodos fuera de la clase
//estos metodos no pueden utilizar nada del component

function metodoExterno() {
    console.log("Metodo fuera del component");
}

class Contador extends Component {
    //Las variables se declaran fuera del render
    //No se utilizan las palabras clave para declararlas
    numero = 1;

    incrementarNumero = () => {
        this.numero = this.numero + 1;
        console.log(this.numero);
    };

    //Vamos a declara variables de estado
    state = {
        valor: parseInt(this.props.inicio),
    };

    //Metodo para cambiar el valor del state
    incrementarValorState = () => {
        // var titulos = []

        // titulos.push(<h1>Titulo 1</h1>);
        // titulos.push(<h1>Titulo 2</h1>);
        // titulos.push(<h1>Titulo 3</h1>);
        // return titulos

        //Para modificar los elementos que tengamos dentro de state
        //Se utiliza setState con un json del objeto con las variables a modificar
        this.setState({
            valor: this.state.valor + 1,
        });
    };

    render() {
        return (
            <div>
                <h1> Contador </h1> <h2> Inicio del contador: {this.props.inicio} </h2>
                <h2> Valor del state: {this.state.valor} </h2>
                {/* 
                    La llamada a los metodos es mas sencilla 
                    NO se ponen los parentisis
                */}
                <button onClick={this.incrementarValorState}>Incrementar Valor</button>
                <button
                    onClick={() => {
                        this.incrementarNumero();
                        metodoExterno();
                    }}
                >
                    Sumar contador
                </button>
            </div>
        );
    }
}

export default Contador;

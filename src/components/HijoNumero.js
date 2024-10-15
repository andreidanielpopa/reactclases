import { Component } from "react";

class HijoNumero extends Component {
    // sumarNumeroHijo = () =>{

    // }
    render() {
        return (
            <div>
                <h4> Numero hijo: {this.props.numero} </h4>
                <button onClick={() => this.props.metodoPadre(this.props.numero)}>Sumar {this.props.numero}</button>
            </div>
        );
    }
}

export default HijoNumero;

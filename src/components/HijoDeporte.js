import { Component } from 'react';

class HijoDeporte extends Component {
    selecionarFavorito = () => {
        var deporte = this.props.nombre;
        this.props.mostrarFavorito(deporte);
    }

    render() {
        return (
            <div>
                <h2>{this.props.nombre}</h2>
                <button onClick={this.selecionarFavorito}>Seleccionar Favorito</button>
            </div>
        );
    }
}

export default HijoDeporte;

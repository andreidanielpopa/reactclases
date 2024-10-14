import { Component } from 'react';
import HijoDeporte from './HijoDeporte';

class PadreDeportes extends Component {
    deportes = ['Baloncesto', 'LoL', 'Futbol', 'Basket', 'Padel'];

    mostrarFavorito = (deporteSeleccionado) => {
        this.setState({
            favorito: deporteSeleccionado,
        });
    };

    state = {
        favorito: '',
    };

    render() {
        return (
            <div>
                <h1>Padre Deportes</h1>

                <h1>Su deporte favorito es: {this.state.favorito}</h1>
                {this.deportes.map((deporte, index) => {
                    return <HijoDeporte key={index} nombre={deporte} mostrarFavorito={this.mostrarFavorito}/>;
                })}
            </div>
        );
    }
}

export default PadreDeportes;

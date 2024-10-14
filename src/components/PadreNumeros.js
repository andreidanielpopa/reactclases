import { Component } from 'react';
import HijoNumero from './HijoNumero';

class PadreNumeros extends Component {
    state = {
        numeros: [],
        totalsuma: 0,
    };

    dibujarHijos = () => {
        var numero = parseInt(Math.random() * 10) + 1;
        this.setState({
            numeros: [this.state.numeros, <HijoNumero numero={numero} metodoPadre={this.sumarTotal} key={this.state.numeros.length} />],
        });
    };

    sumarTotal = (sumando) => {
        var suma = this.state.totalsuma + sumando;
        this.setState({
            totalsuma: suma,
        });
    };

    render() {
        return (
            <div>
                <h1>Padre Numeros</h1>
                <h2>Total: {this.state.totalsuma}</h2>
                <button onClick={this.dibujarHijos}>Nuevo Numero</button>
                {this.state.numeros}
            </div>
        );
    }
}

export default PadreNumeros;
